import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">{username}</p>
        </div>
        <p className="text-green-600">{email}</p>
        <p className="text-green-600">{phone}</p>
        <p className="text-green-600">{website}</p>
        <p className="text-green-600">{address.street}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</span>
            <span>Company: {company.name}, {company.catchPhrase}, {company.bs}</span>
        </div>
        </div>
    );
    };

export default UserCard;