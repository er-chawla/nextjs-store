import { LuUser } from 'react-icons/lu';
import { currentUser, auth } from '@clerk/nextjs/server';

async function UserIcon() {
    const user = await currentUser();

    const profileImage = user?.imageUrl;

    if (profileImage) {
        return (
            <img
                src={profileImage}
                alt="user"
                className="w-6 h-6 rounded-full object-cover"
            />
        );
    }
    return <LuUser className="w-6 h-6 rounded-full bg-primary text-white" />;
}

export default UserIcon;
