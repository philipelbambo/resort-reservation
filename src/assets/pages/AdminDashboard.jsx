import React, { useState } from 'react';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/Sidemenu';
import Breadcrumb from '../components/Breadcrumbs';
import { 
  AreaChart, 
  Area, 
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

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
    { month: 'January', totalGuests: 120, revenue: 22000, occupancyRate: 85 },
    { month: 'February', totalGuests: 400, revenue: 1000, occupancyRate: 88 },
    { month: 'March', totalGuests: 140, revenue: 13000, occupancyRate: 90 },
    { month: 'April', totalGuests: 150, revenue: 15000, occupancyRate: 92 },
    { month: 'May', totalGuests: 160, revenue: 900, occupancyRate: 94 },
    { month: 'June', totalGuests: 170, revenue: 5000, occupancyRate: 100 },
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
              
              {/* IMPROVED CHART SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="text-md font-medium mb-3 text-gray-700">Guest Occupancy</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tick={{ fill: '#666' }} />
                      <YAxis tick={{ fill: '#666' }} />
                      <Tooltip 
                        formatter={(value, name) => [value, name === 'totalGuests' ? 'Guests' : name]}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Legend />
                      <Bar 
                        dataKey="totalGuests" 
                        name="Total Guests"
                        fill="#8884d8" 
                        radius={[4, 4, 0, 0]}
                        onClick={(data) => handleMonthClick(data.month)}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="text-md font-medium mb-3 text-gray-700">Revenue Performance</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tick={{ fill: '#666' }} />
                      <YAxis tick={{ fill: '#666' }} />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Legend />
                      <ReferenceLine y={15000} stroke="red" strokeDasharray="3 3" label="Target" />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        name="Monthly Revenue"
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        dot={{ stroke: '#82ca9d', strokeWidth: 2, fill: '#fff', r: 4 }}
                        activeDot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2, fill: '#fff' }}
                        onClick={(data) => handleMonthClick(data.month)}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-md font-medium mb-3 text-gray-700">Occupancy Rate</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#666' }} />
                    <YAxis tick={{ fill: '#666' }} domain={[70, 100]} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Occupancy Rate']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <ReferenceLine y={90} stroke="#ff9800" strokeDasharray="3 3" label="Target Rate" />
                    <Area
                      type="monotone"
                      dataKey="occupancyRate"
                      name="Occupancy Rate"
                      stroke="#ff7300"
                      fill="#ffd8b5"
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                      onClick={(data) => handleMonthClick(data.month)}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              {/* END IMPROVED CHART SECTION */}
            </div>
            
            {selectedMonth && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Weekly New Guests and Revenue for {selectedMonth}</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={getWeeklyData(selectedMonth)}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tick={{ fill: '#666' }} />
                    <YAxis tick={{ fill: '#666' }} />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="newGuests"
                      stroke="#D8BFD8"
                      fill="#D8BFD8"
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="newRevenue"
                      stroke="#D8BFD8"
                      fill="#D8BFD8"
                      strokeWidth={3}
                    />
                  </AreaChart>
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