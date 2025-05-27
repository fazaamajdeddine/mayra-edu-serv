import Image from "next/image";

// Define a type for the keys of userCounts
type UserType = 'student' | 'parent' | 'teacher' | 'staff';

const UserCard = ({ type }: { type: UserType }) => {
  // Define a mapping of user types to their respective counts
  const userCounts = {
    student: 328,
    parent: 120,
    teacher: 45,
    staff: 89,
  };

  // Get the count for the current user type
  const count = userCounts[type] || 0;

  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{count}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
