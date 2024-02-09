import SocialMediaIcon from "../../icons/socialMediaIcon"

export default function FollowUsSection() {
    return (
        <div className="pb-24 flex flex-col w-full g-4 px-4 md:px-0">
            <h5 className="text-white font-bold text-xl">Follow us</h5>
            <div className="flex justify-between py-8 px-8">
                <SocialMediaIcon name="facebook" />
                <SocialMediaIcon name="instagram" />
                <SocialMediaIcon name="twitter" />
                <SocialMediaIcon name="tiktok" />
            </div>
        </div>
    )
};
