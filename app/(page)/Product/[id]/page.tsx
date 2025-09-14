import ProductDetails from "@/components/home/DetailsPage"

const Page = ({ params }: { params: { id: string } }) => {
  return(

<div>
    <ProductDetails params={params} />
</div>

  )
}

export default Page