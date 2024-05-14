import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, tasks, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("task.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    // sorting
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        router.get(route("task.index"), queryParams);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tasks
                </h2>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
                            <div className="overflow-autuo">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <TableHeading
                                                name="id"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}>
                                                ID
                                            </TableHeading>
                                            <th className="px-3 py-2">Image</th>
                                            <th onClick={e => sortChanged('name')}>
                                                <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                                                    Name
                                                    <div>
                                                        {/* <ChevronUpIcon className="w-4" /> */}
                                                        {/* <ChevronDownIcon className="w-4 -mt-2" /> */}
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('status')} >
                                                <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                                                    Status
                                                    <div>
                                                        {/* <ChevronUpIcon className="w-4" /> */}
                                                        {/* <ChevronDownIcon className="w-4 -mt-2" /> */}
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('created_at')} >
                                                <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                                                    Create Date
                                                    <div>
                                                        {/* <ChevronUpIcon className="w-4" /> */}
                                                        {/* <ChevronDownIcon className="w-4 -mt-2" /> */}
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('due_date')} >
                                                <div className="px-3 py-2 flex items-center justify-between gap-1 cursor-pointer">
                                                    Due Date
                                                    <div>
                                                        {/* <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4 -mt-2" /> */}
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="px-3 py-2">Created by</th>
                                            <th className="px-3 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.name}
                                                    placeholder="Task Name"
                                                    onBlur={e =>
                                                        searchFieldChanged("name", e.target.value)
                                                    }
                                                    onKeyPress={e => onKeyPress("name", e)}
                                                />
                                            </th>
                                            <th className="px-3 py-3">
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={queryParams.status}
                                                    onChange={e =>
                                                        searchFieldChanged("status", e.target.value)
                                                    }
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="in_progress">In Progress</option>
                                                    <option value="completed">Completed</option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.data.map((task) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-3 py-3">{task.id}</td>
                                                <td className="px-3 py-3">
                                                    <img src={task.image_path} style={{ width: 80 }} />
                                                </td>
                                                <td className="px-3 py-3 text-nowrap">{task.name}</td>
                                                <td className="px-3 py-3">
                                                    <span className={`px-2 py-1 rounded text-white ${TASK_STATUS_CLASS_MAP[task.status]}`}>
                                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-3 text-nowrap">{task.created_at}</td>
                                                <td className="px-3 py-3 text-nowrap">{task.due_date}</td>
                                                <td className="px-3 py-3">{task.createdBy.name}</td>
                                                <td className="px-3 py-3">
                                                    <Link href="{ruote('task.edit', task.id)}" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                        Edit
                                                    </Link>
                                                    <Link href="{ruote('task.delete', task.id)}" className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={tasks.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
