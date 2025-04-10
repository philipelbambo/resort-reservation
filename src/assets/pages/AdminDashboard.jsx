import React, { useState } from 'react';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/Sidemenu';
import Breadcrumb from '../components/Breadcrumbs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [customerRequests, setCustomerRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: '', request: '' });
  const [totalGuests, setTotalGuests] = useState(120);
  const [totalRooms, setTotalRooms] = useState(100);
  const [occupiedRooms, setOccupiedRooms] = useState(85);
  const [guests, setGuests] = useState([
    { id: 1, name: 'John Doe', roomNumber: '101' },
    { id: 2, name: 'Jane Smith', roomNumber: '102' },
  ]);
  const pricePerGuest = 100;

  const [monthlyData, setMonthlyData] = useState([
    { month: 'January', totalGuests: 120, revenue: 12000, occupancyRate: 85 },
    { month: 'February', totalGuests: 130, revenue: 1000, occupancyRate: 88 },
    { month: 'March', totalGuests: 140, revenue: 13000, occupancyRate: 90 },
    { month: 'April', totalGuests: 150, revenue: 15000, occupancyRate: 92 },
    { month: 'May', totalGuests: 160, revenue: 900, occupancyRate: 94 },
    { month: 'June', totalGuests: 170, revenue: 17000, occupancyRate: 95 },
    { month: 'July', totalGuests: 180, revenue: 18000, occupancyRate: 96 },
    { month: 'August', totalGuests: 90, revenue: 19000, occupancyRate: 97 },
    { month: 'September', totalGuests: 200, revenue: 20000, occupancyRate: 98 },
    { month: 'October', totalGuests: 210, revenue: 21000, occupancyRate: 99 },
    { month: 'November', totalGuests: 220, revenue: 22000, occupancyRate: 100 },
    { month: 'December', totalGuests: 230, revenue: 2000, occupancyRate: 100 },
  ]);

  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const handleAddRequest = () => {
    if (newRequest.name && newRequest.request) {
      const request = {
        id: Date.now(),
        name: newRequest.name,
        request: newRequest.request,
        status: 'Pending',
      };
      setCustomerRequests([...customerRequests, request]);
      setNewRequest({ name: '', request: '' });
    }
  };

  const handleResolveRequest = (id) => {
    setCustomerRequests(
      customerRequests.map((req) =>
        req.id === id ? { ...req, status: 'Resolved' } : req
      )
    );
  };

  const calculateRevenue = () => {
    return totalGuests * pricePerGuest;
  };

  const calculateOccupancyRate = () => {
    return ((occupiedRooms / totalRooms) * 100).toFixed(2);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const getWeeklyData = (month) => {
    const monthData = monthlyData.find((data) => data.month === month);
    if (!monthData) return [];

    const weeklyRevenue = monthData.revenue / 4; // Assuming equal distribution
    return [
      { day: 'Week 1', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 2', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 3', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 4', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
    ];
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Overview':
        return (
          <div className='w-full'>
            <Breadcrumb title="" links={breadcrumbLinks} />
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-6">Resort Reservation Overview</h3>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Monthly Resort Data</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorGuests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#666' }} onClick={(data) => handleMonthClick(data.value)} />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="totalGuests"
                    stroke="url(#colorGuests)"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="red"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="occupancyRate"
                    stroke="url(#colorOccupancy)"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            {selectedMonth && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Weekly New Guests and Revenue for {selectedMonth}</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={getWeeklyData(selectedMonth)}>
                    <defs>
                      <linearGradient id="colorNewGuests" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tick={{ fill: '#666' }} />
                    <YAxis tick={{ fill: '#666' }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="newGuests"
                      stroke="url(#colorNewGuests)"
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="newRevenue"
                      stroke="blue"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        );
      default:
        return <p>Welcome to the Admin Dashboard</p>;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-5">
      <Header />
      <div className="flex w-full gap-6">
        <div className="">
          <Sidemenu />
        </div>
        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
