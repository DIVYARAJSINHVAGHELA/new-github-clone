import Image from "next/image"

export function FeaturedCompanies() {
  const companies = [
    { name: "Philips", logo: "/placeholder.svg?height=40&width=100" },
    { name: "SAP", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Infosys", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Spotify", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Shopify", logo: "/placeholder.svg?height=40&width=100" },
    { name: "EY", logo: "/placeholder.svg?height=40&width=60" },
    { name: "Figma", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Duolingo", logo: "/placeholder.svg?height=40&width=100" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {companies.map((company, index) => (
        <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
          <Image src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} width={100} height={40} />
        </div>
      ))}
    </div>
  )
}
