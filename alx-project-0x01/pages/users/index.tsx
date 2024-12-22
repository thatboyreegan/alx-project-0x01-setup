import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";

const Users: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUsers, setNewUsers] = useState<UserData[]>(users);

  const handleAddUser = (user: UserData) => {
    setNewUsers([...newUsers, { ...user, id: newUsers.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {newUsers.map(({ id, name, username, email, address, phone, website, company }) => (
            <UserCard
              key={id}
              name={name}
              username={username}
              email={email}
              address={address}
              phone={phone}
              website={website}
              company={company}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserData[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;