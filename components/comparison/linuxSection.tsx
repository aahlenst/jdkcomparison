/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";

export type LinuxFeaturesSlice = Pick<
	Model.FeatureComparison,
	| "id"
	| "linuxx64"
	| "linuxx64Musl"
	| "linuxx32"
	| "linuxAArch64"
	| "linuxAArch64Musl"
	| "linuxAArch32"
	| "linuxPPC64"
	| "linuxRISCV64"
	| "linuxs390x"
	| "linuxAPK"
	| "linuxDeb"
	| "linuxRPM"
	| "linuxContainerImages"
>;

type LinuxSectionProps = {
	productData: LinuxFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function LinuxSection({
	productData,
	showDifferencesOnly,
}: LinuxSectionProps) {
	const x64 = productData.map((product) => ({
		...product.linuxx64,
		id: product.id,
	}));
	const x64Musl = productData.map((product) => ({
		...product.linuxx64Musl,
		id: product.id,
	}));
	const x32 = productData.map((product) => ({
		...product.linuxx32,
		id: product.id,
	}));
	const aarch64 = productData.map((product) => ({
		...product.linuxAArch64,
		id: product.id,
	}));
	const aarch64Musl = productData.map((product) => ({
		...product.linuxAArch64Musl,
		id: product.id,
	}));
	const aarch32 = productData.map((product) => ({
		...product.linuxAArch32,
		id: product.id,
	}));
	const ppc64 = productData.map((product) => ({
		...product.linuxPPC64,
		id: product.id,
	}));
	const riscv64 = productData.map((product) => ({
		...product.linuxRISCV64,
		id: product.id,
	}));
	const s390x = productData.map((product) => ({
		...product.linuxs390x,
		id: product.id,
	}));
	const apk = productData.map((product) => ({
		...product.linuxAPK,
		id: product.id,
	}));
	const deb = productData.map((product) => ({
		...product.linuxDeb,
		id: product.id,
	}));
	const rpm = productData.map((product) => ({
		...product.linuxRPM,
		id: product.id,
	}));
	const containerImages = productData.map((product) => ({
		...product.linuxContainerImages,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{
			x64: x64,
			x64Musl: x64Musl,
			x32: x32,
			aarch64: aarch64,
			aarch64Musl: aarch64Musl,
			aarch32: aarch32,
			ppc64: ppc64,
			riscv64: riscv64,
			s390x: s390x,
			apk: apk,
			deb: deb,
			rpm: rpm,
			containerImages: containerImages,
		}
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="linux" label="Platforms: Linux">
			{showFeatures.x64 && (
				<Feature id="linux-x64" name="x86, 64-bit" values={x64} />
			)}
			{showFeatures.x64Musl && (
				<Feature
					id="linux-x64-musl"
					name="x86, 64-bit, musl"
					values={x64Musl}
				>
					<a href="https://musl.libc.org/">Musl</a> is an alternative
					C standard library implementation used by some Linux
					distributions such as{" "}
					<a href="https://alpinelinux.org/">Alpine Linux</a>. Users
					of such a Linux distribution <strong>must</strong> use a JDK
					that was built against musl.
				</Feature>
			)}
			{showFeatures.x32 && (
				<Feature id="linux-x32" name="x86, 32-bit" values={x32} />
			)}
			{showFeatures.aarch64 && (
				<Feature
					id="linux-aarch64"
					name="ARM, 64-bit"
					values={aarch64}
				/>
			)}
			{showFeatures.aarch64Musl && (
				<Feature
					id="linux-aarch64-musl"
					name="ARM, 64-bit, musl"
					values={aarch64Musl}
				>
					<a href="https://musl.libc.org/">Musl</a> is an alternative
					C standard library implementation used by some Linux
					distributions such as{" "}
					<a href="https://alpinelinux.org/">Alpine Linux</a>. Users
					of such a Linux distribution <strong>must</strong> use a JDK
					that was built against musl.
				</Feature>
			)}
			{showFeatures.aarch32 && (
				<Feature
					id="linux-aarch32"
					name="ARM, 32-bit"
					values={aarch32}
				/>
			)}
			{showFeatures.ppc64 && (
				<Feature id="linux-ppc64" name="PPC, 64-bit" values={ppc64} />
			)}
			{showFeatures.riscv64 && (
				<Feature
					id="linux-riscv64"
					name="RISC-V, 64-bit"
					values={riscv64}
				/>
			)}
			{showFeatures.s390x && (
				<Feature id="linux-s390x" name="S390, 64-bit" values={s390x} />
			)}
			{showFeatures.apk && (
				<Feature id="linux-apk" name="APK Packages" values={apk}>
					APK is the package format used by Alpine Linux.
				</Feature>
			)}
			{showFeatures.deb && (
				<Feature id="linux-deb" name="Deb Packages" values={deb}>
					Deb is the package format of Debian and its derivatives like
					Ubuntu.
				</Feature>
			)}
			{showFeatures.rpm && (
				<Feature id="linux-rpm" name="RPM Packages" values={rpm}>
					RPM packages are used by the Red Hat families of Linux
					distributions as well as SUSE and its derivatives. Due to
					small incompatibilities between Red Hat distributions and
					SUSE, separate packages are usually required for each
					distribution family.
				</Feature>
			)}
			{showFeatures.containerImages && (
				<Feature
					id="linux-container-images"
					name="Container Images"
					values={containerImages}
				/>
			)}
		</ComparisonSection>
	);
}
