import HR from "../components/HR";
import PageInnerWrap from "../components/PageInnerWrap";
import SEO from "../components/SEO";

export default function Services() {
	return (
		<>
			<SEO
				title="Our Services"
				description="LAC Electric offers comprehensive electrical services including residential installations, commercial installations, new construction, service upgrades, tenant improvements, and emergency power solutions."
				keywords="electrical services, residential electrician, commercial electrician, new construction, service upgrades, tenant improvement, emergency power, Los Angeles electrician, electrical contractor services"
			/>
			<PageInnerWrap className="flex flex-col py-4 pb-16">
				<h1>Our Services</h1>
				<HR />
				<div className="list flex flex-col justify-evenly gap-8 sm:flex-row">
					<div className="list__left mb-8 sm:mb-0">
						<h3 className="mb-4 text-lg text-[#1e283a]">
							Residential Installations
						</h3>
						<ul className="list-disc pl-[17px] leading-[28px]">
							<li className="text-[#6f6969]">Ground up construction</li>
							<li className="text-[#6f6969]">
								Multifamily apartment buildings
							</li>
							<li className="text-[#6f6969]">Condominium units</li>
							<li className="text-[#6f6969]">Mix use buildings</li>
							<li className="text-[#6f6969]">New homes</li>
							<li className="text-[#6f6969]">Spec homes</li>
							<li className="text-[#6f6969]">Custom homes</li>
							<li className="text-[#6f6969]">Track homes</li>
							<li className="text-[#6f6969]">Remodeling</li>
							<li className="text-[#6f6969]">Service Upgrades</li>
							<li className="text-[#6f6969]">Rewiring</li>
							<li className="text-[#6f6969]">Lighting Upgrades</li>
							<li className="text-[#6f6969]">Service Calls</li>
							<li className="text-[#6f6969]">Troubleshooting</li>
							<li className="text-[#6f6969]">
								Dry Utilities (Power and Communication)
							</li>
							<li className="text-[#6f6969]">Electric Home Inspections</li>
						</ul>
					</div>
					<div className="list__right mb-8 sm:mb-0">
						<h3 className="mb-4 text-lg text-[#1e283a]">
							Commercial Installations
						</h3>
						<ul className="list-disc pl-[17px] leading-[28px]">
							<li className="text-[#6f6969]">Tenant Improvement</li>
							<li className="text-[#6f6969]">New construction</li>
							<li className="text-[#6f6969]">Troubleshooting</li>
							<li className="text-[#6f6969]">EV Chargers</li>
							<li className="text-[#6f6969]">Remodeling</li>
							<li className="text-[#6f6969]">Service upgrades</li>
							<li className="text-[#6f6969]">Service calls</li>
							<li className="text-[#6f6969]">Retail Spaces</li>
							<li className="text-[#6f6969]">Lighting automation</li>
							<li className="text-[#6f6969]">Backup generator sets</li>
							<li className="text-[#6f6969]">Commercial Offices</li>
							<li className="text-[#6f6969]">Warehouses</li>
							<li className="text-[#6f6969]">Emergency Inverters</li>
							<li className="text-[#6f6969]">UPS systems</li>
							<li className="text-[#6f6969]">
								Dry Utilities ( Power & Communication)
							</li>
						</ul>
					</div>
				</div>
			</PageInnerWrap>
		</>
	);
}
