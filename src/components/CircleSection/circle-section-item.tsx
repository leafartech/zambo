interface CircleSectionItemProps {
    title: String
    subtitle: string
    right: boolean
    className?: string
}

export default function CircleSectionItem({ subtitle, title, right, className }: CircleSectionItemProps) {
    return (
        <div className={`flex flex-col sm:gap-2 text-left ${right ? 'sm:text-left' : 'sm:text-right'} ${className}`}>
            <h4 className="text-white text-xl sm:text-2xl font-semibold">{title}</h4>
            <p className="text-orange-2">{subtitle}</p>
        </div>
    )
}