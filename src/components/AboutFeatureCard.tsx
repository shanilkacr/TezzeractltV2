export default function AboutFeatureCard(props: {title: string, description: string
    children?: React.ReactNode
})  

{
    const { title, description, children } = props;
    return (
        <div className="bg-neutral-800 border p-6 border-white/10 rounded-xl container mx-auto flex flex-col mt-12 gap-8">
            <div>{children}</div>
            <div>
                <h3 className="text-3xl text-white font-medium mt-6">{title}</h3>
                <p className="text-white/65 pd-10 ">{description}</p>
            </div>
        </div>
    )
}