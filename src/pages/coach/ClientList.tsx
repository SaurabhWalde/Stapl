
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Plus, Filter, Download, Users, UserCheck } from 'lucide-react';

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockClients = [
    { id: 1, name: "Alex Johnson", email: "alex@email.com", age: 24, sport: "Basketball", status: "Active", lastSession: "Today", progress: 85 },
    { id: 2, name: "Maria Garcia", email: "maria@email.com", age: 28, sport: "Soccer", status: "Active", lastSession: "Yesterday", progress: 92 },
    { id: 3, name: "David Chen", email: "david@email.com", age: 32, sport: "Tennis", status: "Inactive", lastSession: "1 week ago", progress: 67 },
    { id: 4, name: "Sarah Williams", email: "sarah@email.com", age: 26, sport: "Swimming", status: "Active", lastSession: "2 days ago", progress: 78 },
    { id: 5, name: "Mike Brown", email: "mike@email.com", age: 29, sport: "Running", status: "Active", lastSession: "Today", progress: 89 },
  ];

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Header Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Client Management</h1>
                  <p className="text-gray-600">Manage your athletes and track their progress</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button className="hover:bg-gray-900 hover:text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Client
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Total Clients</p>
                        <p className="text-3xl font-bold">24</p>
                      </div>
                      <Users className="w-8 h-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Active Today</p>
                        <p className="text-3xl font-bold">18</p>
                      </div>
                      <UserCheck className="w-8 h-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100">Avg Progress</p>
                        <p className="text-3xl font-bold">82%</p>
                      </div>
                      <div className="w-8 h-8 text-purple-200">📈</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">New This Week</p>
                        <p className="text-3xl font-bold">3</p>
                      </div>
                      <div className="w-8 h-8 text-orange-200">✨</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Client Table */}
              <Card className="border-0 shadow-lg bg-white/80 bg-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <span className="text-black">Client Directory</span>
                      <Badge variant="secondary">{filteredClients.length} clients</Badge>
                    </CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 w-80">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search clients by name or sport..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="text-sm"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border text-black">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client</TableHead>
                          <TableHead>Sport</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Session</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredClients.map((client) => (
                          <TableRow key={client.id} className="hover:bg-muted/50">
                            <TableCell>
                              <div>
                                <div className="font-medium">{client.name}</div>
                                <div className="text-sm text-muted-foreground">{client.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-black">{client.sport}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={client.status === "Active" ? "default" : "secondary"}>
                                {client.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm">{client.lastSession}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${client.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{client.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ClientList;
