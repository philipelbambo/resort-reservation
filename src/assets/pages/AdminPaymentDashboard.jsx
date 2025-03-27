import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumbs";

const paymentsData = [
  { id: 1, name: "John Doe", email: "john@example.com", amount: 120, status: "Pending", date: "2025-03-20", method: "Gcash" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", amount: 200, status: "Paid", date: "2025-03-18", method: "Gcash" },
  { id: 3, name: "Michael Lee", email: "michael@example.com", amount: 150, status: "Pending", date: "2025-03-19", method: "Gcash" },
];

const AdminCustomerPayment = () => {
  const [payments, setPayments] = useState(paymentsData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const handleConfirm = (id) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Paid" } : p))
    );
  };

  const totalRevenue = payments.reduce((acc, p) => (p.status === "Paid" ? acc + p.amount : acc), 0);
  const pendingAmount = payments.reduce((acc, p) => (p.status === "Pending" ? acc + p.amount : acc), 0);

  const filteredPayments = payments
    .filter((p) =>
      (filter === "All" || p.status === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortBy === "amount" ? b.amount - a.amount : new Date(b.date).getTime() - new Date(a.date).getTime()));

  const breadcrumbLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Payments", path: "/admin-payment-dashboard" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
        <Header />
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <Sidemenu />
            </div>
            <div className="col-span-9">
                <Breadcrumb title="" links={breadcrumbLinks} />
                <div className="w-full text-center py-8 bg-gray-100 rounded-lg mb-6">
                    <h2 className="text-5xl font-extrabold">Payment Overview</h2>
                </div>

                <p className="text-xl">
                    Total Revenue: <span className="text-green-600 font-bold">Php {totalRevenue}</span>
                </p>
                <p className="text-xl mb-6">
                    Pending Payments: <span className="text-yellow-600 font-bold">Php {pendingAmount}</span>
                </p>

                <div className="flex justify-between mb-6">
                    <input
                    type="text"
                    placeholder="Search Customer"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-1/3 p-3 border rounded-md text-lg"
                    />
                    <select
                    className="border p-3 rounded-md text-lg"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    >
                    <option value="All">All</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    </select>
                    <select
                    className="border p-3 rounded-md text-lg"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    >
                    <option value="date">Sort by Date</option>
                    <option value="amount">Sort by Amount</option>
                    </select>
                </div>

                <table className="w-full border-collapse border border-gray-300 text-lg">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3">Name</th>
                        <th className="border border-gray-300 p-3">Email</th>
                        <th className="border border-gray-300 p-3">Amount</th>
                        <th className="border border-gray-300 p-3">Method</th>
                        <th className="border border-gray-300 p-3">Status</th>
                        <th className="border border-gray-300 p-3">Date</th>
                        <th className="border border-gray-300 p-3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPayments.map((p) => (
                        <tr key={p.id} className="text-center">
                        <td className="border border-gray-300 p-3">{p.name}</td>
                        <td className="border border-gray-300 p-3">{p.email}</td>
                        <td className="border border-gray-300 p-3">Php {p.amount}</td>
                        <td className="border border-gray-300 p-3">{p.method}</td>
                        <td className="border border-gray-300 p-3">
                            <span
                            className={`px-3 py-2 rounded text-white text-lg ${
                                p.status === "Paid" ? "bg-green-500" : "bg-yellow-500"
                            }`}
                            >
                            {p.status}
                            </span>
                        </td>
                        <td
                            className={`border border-gray-300 p-3 ${
                            p.status === "Pending" && new Date(p.date) < new Date()
                                ? "text-red-500 font-bold"
                                : ""
                            }`}
                        >
                            {p.date}
                        </td>
                        <td className="border border-gray-300 p-3">
                            {p.status === "Pending" && (
                            <button
                                onClick={() => handleConfirm(p.id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-lg"
                            >
                                Confirm
                            </button>
                            )}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default AdminCustomerPayment;
