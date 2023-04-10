import React from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";
import {ComparisonSection} from "./comparisonSection";
import {useShowDifferencesOnly} from "@/hooks/useShowDifferencesOnly";

type GarbageCollectorsSectionProps = {
	productData: Model.FeatureComparison[],
	showDifferencesOnly: boolean
}

export function GarbageCollectorsSection({productData, showDifferencesOnly}: GarbageCollectorsSectionProps) {
	const cms = productData.map(product => ({...product.cms, id: product.id}));
	const epsilon = productData.map(product => ({...product.epsilon, id: product.id}));
	const g1 = productData.map(product => ({...product.g1, id: product.id}));
	const parallel = productData.map(product => ({...product.parallel, id: product.id}));
	const serial = productData.map(product => ({...product.serial, id: product.id}));
	const shenandoah = productData.map(product => ({...product.shenandoah, id: product.id}));
	const z = productData.map(product => ({...product.z, id: product.id}));
	const custom = productData.map(product => ({...product.customGCs, id: product.id}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly,
		{
			cms: cms,
			epsilon: epsilon,
			g1: g1,
			parallel: parallel,
			serial: serial,
			shenandoah: shenandoah,
			z: z,
			custom: custom
		});

	if (!showSection) {
		return (<></>);
	}

	return (
		<ComparisonSection id="gcs" label="Garbage Collectors">
			{showFeatures.cms &&
				<Feature id="gcs-cms" name="CMS" values={cms}>
					<a href="https://docs.oracle.com/en/java/javase/11/gctuning/concurrent-mark-sweep-cms-collector.html">Concurrent
						Mark Sweep</a> is a collector that does a part of its work concurrently with the application
					providing shorter pause times. It was <a href="https://openjdk.org/jeps/291">deprecated in OpenJDK
					9</a> and <a href="https://openjdk.org/jeps/363">removed in OpenJDK 14</a>.
				</Feature>
			}
			{showFeatures.epsilon &&
				<Feature id="gcs-epsilon" name="Epsilon" values={epsilon}>
					<a href="https://openjdk.org/jeps/318">Epsilon</a> is an experimental garbage collection algorithm
					that does not reclaim memory. It was introduced in OpenJDK 11.
				</Feature>
			}
			{showFeatures.g1 &&
				<Feature id="gcs-g1" name="G1" values={g1}>
					<a href="https://www.oracle.com/java/technologies/javase/hotspot-garbage-collection.html">G1</a> is
					a general-purpose garbage collector that does a part of its work concurrently with the application
					providing shorter pause times and high throughput. <a href="https://openjdk.org/jeps/248">G1 is the
					default garbage collector since OpenJDK 9</a>.
				</Feature>
			}
			{showFeatures.parallel &&
				<Feature id="gcs-parallel" name="Parallel" values={parallel}>
					The <a href="https://docs.oracle.com/en/java/javase/11/gctuning/parallel-collector1.html">Parallel
					Collector</a> is generational garbage collector that uses multiple threads to speed up garbage
					collection. It is a good choice when throughput is more important than latency.
				</Feature>
			}
			{showFeatures.serial &&
				<Feature id="gcs-serial" name="Serial" values={serial}>
					The Serial Collector is a generational garbage collector that uses a single thread to perform its
					work.
				</Feature>
			}
			{showFeatures.shenandoah &&
				<Feature id="gcs-shenandoah" name="Shenandoah" values={shenandoah}>
					<a href="https://wiki.openjdk.org/display/shenandoah">Shenandoah</a> is a low pause time garbage
					collector that performs a part of its work concurrently with the running Java program. Its pause
					times are independent of the heap size. It was <a href="https://openjdk.org/jeps/189">introduced as
					part of OpenJDK 12</a> and subsequently backported to OpenJDK 11 and 8.
				</Feature>
			}
			{showFeatures.z &&
				<Feature id="gcs-z" name="Z" values={z}>
					<a href="https://wiki.openjdk.org/display/zgc">Z</a> is a garbage collector that performs a part of
					its work concurrently with the running Java program. It promises sub-millisecond pause times
					independent of the heap size. It was <a href="https://openjdk.org/jeps/333">introduced as part of
					OpenJDK 11</a> and is <a href="https://openjdk.org/jeps/377">production-ready since OpenJDK 15</a>.
				</Feature>
			}
			{showFeatures.z &&
				<Feature id="gcs-custom" name="Custom GCs" values={custom}/>
			}
		</ComparisonSection>
	);
}
