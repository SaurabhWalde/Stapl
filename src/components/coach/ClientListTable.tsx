
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, ArrowUpDown, Eye } from 'lucide-react';

const mockClients = [
  { id: 1, name: "Alex Johnson", age: 24, role: "Athlete", lastActivity: "2 hours ago", riskStatus: "Low", sport: "Basketball" },
  { id: 2, name: "Maria Garcia", age: 28, role: "Athlete", lastActivity: "5 hours ago", riskStatus: "Medium", sport: "Soccer" },
  { id: 3, name: "David Chen", age: 32, role: "Patient", lastActivity: "1 day ago", riskStatus: "High", sport: "Rehab" },
  { id: 4, name: "Sarah Williams", age: 26, role: "Athlete", lastActivity: "3 hours ago", riskStatus: "Low", sport: "Tennis" },
  { id: 5, name: "Mike Brown", age: 29, role: "Athlete", lastActivity: "6 hours ago", riskStatus: "Medium", sport: "Swimming" },
];

export function ClientListTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <span>Client List</span>
            <Badge variant="secondary">{filteredClients.length} total</Badge>
          </CardTitle>
          <div className="flex items-center space-x-2 w-64">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">
                  <Button variant="ghost" size="sm" className="h-auto p-0 font-medium">
                    Name <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Risk Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-muted-foreground">{client.sport}</div>
                    </div>
                  </TableCell>
                  <TableCell>{client.age}</TableCell>
                  <TableCell>
                    <Badge variant={client.role === "Athlete" ? "default" : "outline"}>
                      {client.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{client.lastActivity}</TableCell>
                  <TableCell>
                    <Badge variant={getRiskBadgeVariant(client.riskStatus)}>
                      {client.riskStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
