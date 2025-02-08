export const current = [
    { content: "Leetcode", deadline: "10:00 PM", isCompleted: false },
    { content: "Buy  milk", deadline: "10:00 PM", isCompleted: false },
    { content: "Do dished", deadline: "10:00 PM", isCompleted: false },
    { content: "Walk", deadline: "10:00 PM", isCompleted: false },
    { content: "Gym", deadline: "10:00 PM", isCompleted: false },
];

export default function List() {
    return (
        <div className="p-4 space-y-2">
            {current.map((todo, index) => (
                <div key={index} className="flex items-center justify-center gap-3 p-2 border rounded-md shadow">
                    <form action="">
                        <input type="checkbox" className="w-5 h-5 border-gray-400"/>
                    </form>
                    <div className="flex justify-between items-center w-full h-8">
                        <p className="text-lg font-semibold">{todo.content}</p>
                        <p className="text-gray-500">{todo.deadline}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
