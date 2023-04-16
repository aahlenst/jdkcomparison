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
export type Vendor = {
	/**
	 * Name of the vendor, for example, `Dukecorp`.
	 */
	vendor: string;

	/**
	 * Name of the country where the vendor is headquartered, for example, `Denmark`.
	 */
	countryOfOrigin: string;

	/**
	 * URL of the vendor's website.
	 */
	website: string;

	/**
	 * The JDKs being offered by the vendor.
	 */
	jdks: JDK[];

	footnotes: Footnote[];
};

export type JDK = {
	/**
	 * Uniquely identifies the product. Only lowercase characters, numbers, and minus (-) are allowed. Typically, it is
	 * a composition of the JDK's name and its version number, for example, `dukecorp-jdk-17`.
	 */
	id: string;
	information: JDKInformation;
	features: JDKFeatures;
};

export type JDKInformation = {
	/**
	 * Human-readable name of the product, possibly including the vendor name, for example, `Dukecorp JDK 17`.
	 */
	name: string;
	/**
	 * The feature version of the JDK according to {@link https://openjdk.org/jeps/322|JEP 322}.
	 */
	version: number;
	/**
	 * Full URL to the site where the JDK can be downloaded from.
	 */
	downloadSite: string;
};

export type JDKFeatures = {
	/**
	 * The virtual machine being used by this JDK. Possible values include `HotSpot`, `OpenJ9`, `GraalVM`.
	 */
	virtualMachine: FeatureDescription;
	/**
	 * Names the class libraries being used for this particular JDK, for example, `OpenJDK`.
	 */
	classLibraries: FeatureDescription;
	/**
	 * Indicates whether JavaFX is bundled with the JDK.
	 *
	 * OpenJFX does not count. As such, only JDK 8 or earlier can have JavaFX.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if JavaFX is not available on some platforms that a binary archive is
	 * available for.
	 */
	javaFX: FeaturePresence;
	/**
	 * Indicates whether Flight Recorder is available.
	 */
	flightRecorder: FeaturePresence;
	/**
	 * Indicates whether Java Web Start is part of the JDK.
	 */
	javaWS: FeaturePresence;
	gc: GarbageCollectors;
	linux: LinuxSupport;
	mac: MacSupport;
	windows: WindowsSupport;
	otherPlatforms: OtherPlatformsSupport;
	/**
	 * Indicates whether the JDK has passed the Eclipse AQAvit test suite.
	 */
	aqavit: FeaturePresence;
	/**
	 * Indicates whether the JDK has passed the TCK for Java SE.
	 */
	tck: FeaturePresence;
	/**
	 * Lists additional editions of the JDK that can be downloaded. Examples would be `JRE` or `JDK with OpenJFX`.
	 */
	editions: FeatureDescription;
	/**
	 * Indicates the level of changes incorporated into the vendor's JDK in comparison to OpenJDK excluding ports (ports
	 * are handled separately). Possible values: none, few, medium, many
	 *
	 *  - none: OpenJDK without changes.
	 *  - few: Additional backports, crash fixes, minimal user-visible changes (for example, TLS 1.3)
	 *  - medium: Additional subsystems, substantial changes to existing subsystems
	 *  - many: Large changes or additions, for example, custom garbage collectors, virtual machine
	 */
	customisations: FeatureDescription;
	/**
	 * Lists notable features that can only be found in JDKs of this particular vendor.
	 */
	notableFeatures: FeatureDescription;
	/**
	 * Short name of the open source license or 'Proprietary'.
	 */
	license: FeatureDescription;
	/**
	 * Indicates whether the JDK can be used for development free of charge.
	 */
	freeInDevelopment: FeaturePresence;
	/**
	 * Indicates whether the JDK can be used in production free of charge. The license type does not matter as long as
	 * there are no usage restrictions.
	 */
	freeInProduction: FeaturePresence;
	/**
	 * Indicates whether a Software Bill of Materials is published for the JDK.
	 */
	sbom: FeaturePresence;
	/**
	 * Whether paid support can be purchased or not. Support included in a purchased license qualifies as
	 * {@link Present.YES}, too.
	 */
	paidSupport: FeaturePresence;
	eolDate: FeatureDescription;
	/**
	 * Release schedule the vendor is following. Can either be `OpenJDK` or `Custom`. If it is a custom schedule,
	 * describe the schedule in a footnote.
	 *
	 * Treat JDKs with highly inconsistent release schedules (for example, IBM Semeru Runtime) as custom schedules.
	 */
	releaseSchedule: FeatureDescription;
	/**
	 * Time it takes a vendor on average to release an update after the source code has been released by OpenJDK. Use
	 * `none`, `0-3 days`, `1 week`, `1-2 weeks`, `1 month or more` as buckets. If the vendor is on a custom schedule,
	 * (see {@link releaseSchedule}), assign `n/a`.
	 *
	 * Treat JDKs with highly inconsistent release schedules (for example, IBM Semeru Runtime) as custom schedules.
	 */
	releaseDelay: FeatureDescription;
};

export type GarbageCollectors = {
	/**
	 * Indicates whether CMS GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if CMS GC is not available on any platform that an archive exists for.
	 */
	cms: FeaturePresence;
	/**
	 * Indicates whether Epsilon GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if Epsilon GC is not available on any platform that an archive exists for.
	 */
	epsilon: FeaturePresence;
	/**
	 * Indicates whether G1GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if G1GC is not available on any platform that an archive exists for.
	 */
	g1: FeaturePresence;
	/**
	 * Indicates whether Parallel GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if Parallel GC is not available on any platform that an archive exists
	 * for.
	 */
	parallel: FeaturePresence;
	/**
	 * Indicates whether Serial GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if Serial GC is not available on any platform that an archive exists for.
	 */
	serial: FeaturePresence;
	/**
	 * Indicates whether Shenandoah GC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if Shenandoah GC is not available on any platform that an archive exists
	 * for.
	 */
	shenandoah: FeaturePresence;
	/**
	 * Indicates whether ZGC is available.
	 *
	 * Downgrade to {@link Present.PARTIALLY} if ZGC is not available on any platform that an archive exists for.
	 */
	z: FeaturePresence;
	/**
	 * Lists additional garbage collectors that can only be found in JDKs of its vendor.
	 */
	custom: FeatureDescription;
};

export type LinuxSupport = {
	/**
	 * Indicates whether a binary is produced for x86, 32-bit for Linux distributions based on glibc.
	 */
	x32: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for x86, 64-bit for Linux distributions based on glibc.
	 */
	x64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for x86, 64-bit for Linux distributions based on musl.
	 */
	x64Musl: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for ARM, 64-bit for Linux distributions based on glibc.
	 */
	aarch64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for ARM, 64-bit for Linux distributions based on musl.
	 */
	aarch64Musl: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for ARM, 32-bit for Linux distributions based on glibc.
	 */
	aarch32: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for PPC, 64-bit for Linux distributions based on glibc.
	 */
	ppc64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for RISC-V, 64-bit for Linux distributions based on glibc.
	 */
	riscv64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for S390, 64-bit (also known as S390x) for Linux distributions based on
	 * glibc.
	 */
	s390x: FeaturePresence;
	/**
	 * Indicates whether APK packages and an APK repository are available for Alpine Linux. Downgrade to
	 * {@link Present.PARTIALLY} if APKs are absent for a platform that an archive exists for or if there is no APK
	 * repository. Indicate the reason for the downgrade in a footnote.
	 */
	apk: FeaturePresence;
	/**
	 * Indicates whether Deb packages and a Deb repository are available. Downgrade to {@link Present.PARTIALLY} if Debs
	 * are absent for a platform that an archive exists for or if there is no Deb repository.  Indicate the reason for
	 * the downgrade in a footnote.
	 */
	deb: FeaturePresence;
	/**
	 * Indicates whether RPM packages and a RPM repository are available for Red Hat and SUSE flavours. Downgrade to
	 * {@link Present.PARTIALLY} if RPMs are absent for a platform that an archive exists for, if there is no RPM
	 * repository, or if there are no RPMs for both Red Hat and SUSE flavours. Indicate the reason for the downgrade in
	 * a footnote.
	 */
	rpm: FeaturePresence;
	/**
	 * Indicates whether container images are offered, either on Docker Hub, Quay, or another public registry. Downgrade
	 * to {@link Present.PARTIALLY} if the container images are absent for a platform that an archive exists for.
	 * Indicate the reason for the downgrade in a footnote.
	 */
	containerImages: FeaturePresence;
};

export type MacSupport = {
	/**
	 * Indicates whether a binary is produced for x86, 64-bit.
	 */
	x64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for ARM, 64-bit (Apple Silicon processors).
	 */
	aarch64: FeaturePresence;
	/**
	 * Indicates whether a PKG or another kind of setup routine is offered. Downgrade to {@link Present.PARTIALLY} if
	 * the installers are absent for a platform that an archive exists for.
	 */
	installers: FeaturePresence;
};

export type WindowsSupport = {
	/**
	 * Indicates whether a binary is produced for x86, 32-bit.
	 */
	x32: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for x86, 64-bit.
	 */
	x64: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for ARM, 64-bit.
	 */
	aarch64: FeaturePresence;
	/**
	 * Indicates whether a MSI or another kind of setup routine is offered. Downgrade to {@link Present.PARTIALLY} if
	 * the installers are absent for a platform that an archive exists for.
	 */
	installers: FeaturePresence;
	/**
	 * Indicates whether container images are offered, either on Docker Hub, Quay, or another public registry. Downgrade
	 * to {@link Present.PARTIALLY} if the container images are absent for a platform that an archive exists for.
	 * Indicate the reason for the downgrade in a footnote.
	 */
	containerImages: FeaturePresence;
};

export type OtherPlatformsSupport = {
	/**
	 * Indicates whether a binary is produced for AIX, PPC.
	 */
	aixPPC: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for Solaris, SPARC.
	 */
	solarisSPARC: FeaturePresence;
	/**
	 * Indicates whether a binary is produced for Solaris, x86, 64-bit.
	 */
	solarisx64: FeaturePresence;
};

export type FeatureDescription = {
	/**
	 * Textual description of the feature. Plain text only, no Markdown allowed.
	 */
	text: string;

	/**
	 * Optional reference to a {@link Footnote}.
	 */
	footnote?: FootnoteReference;
};

export type FeaturePresence = {
	present: Present;
	footnote?: FootnoteReference;
};

export enum Present {
	YES,
	PARTIALLY,
	NO,
	UNKNOWN,
}

export type FootnoteReference = string;

export type Footnote = {
	id: string;
	markdown: string;
};
