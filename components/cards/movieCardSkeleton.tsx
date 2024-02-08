export default function MovieCardSkeleton() {
    return (
        <div className="w-32 h-48">
            <div className="w-32 h-48 relative rounded-lg overflow-hidden group bg-extra-light">
                <div className="absolute bottom-0 w-32 h-8 bg-extra-light flex justify-center items-center rounded-lg group-hover:opacity-90"></div>
            </div>
        </div>
    )
};
