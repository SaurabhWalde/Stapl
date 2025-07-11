
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ClipboardList, Users, Search, Plus } from 'lucide-react';

const programs = [
  { id: 1, name: "HIIT Recovery", type: "Workout", duration: "30 min", difficulty: "Medium" },
  { id: 2, name: "Injury Prevention", type: "Rehab", duration: "45 min", difficulty: "Low" },
  { id: 3, name: "Strength Building", type: "Workout", duration: "60 min", difficulty: "High" },
  { id: 4, name: "Active Recovery", type: "Recovery", duration: "20 min", difficulty: "Low" },
];

const recentAssignments = [
  { athlete: "Alex Johnson", program: "HIIT Recovery", status: "Completed", date: "Today" },
  { athlete: "Maria Garcia", program: "Injury Prevention", status: "In Progress", date: "Yesterday" },
  { athlete: "Mike Brown", program: "Strength Building", status: "Assigned", date: "2 days ago" },
];

export function ProgramAssignmentPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedProgram, setDraggedProgram] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "secondary";
      case "In Progress": return "default";
      case "Assigned": return "outline";
      default: return "secondary";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ClipboardList className="w-5 h-5 text-blue-500" />
          <span>Program Assignment</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Available Programs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Available Programs</h4>
            <Button size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              New Program
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {programs.map((program) => (
              <div
                key={program.id}
                className="p-3 border rounded-lg cursor-move hover:bg-muted/50 transition-colors"
                draggable
                onDragStart={() => setDraggedProgram(program.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{program.name}</div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{program.type}</Badge>
                      <Badge variant={getDifficultyColor(program.difficulty)} className="text-xs">
                        {program.difficulty}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignment Drop Zone */}
        <div className="space-y-3">
          <h4 className="font-medium">Drop Zone - Assign to Athletes</h4>
          <div
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (draggedProgram) {
                // Handle program assignment logic here
                console.log(`Assigned program ${draggedProgram}`);
                setDraggedProgram(null);
              }
            }}
          >
            <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Drag a program here to assign to selected athletes</p>
            <p className="text-xs text-muted-foreground mt-1">Or click to select athletes manually</p>
          </div>
        </div>

        {/* Recent Assignments */}
        <div className="space-y-3">
          <h4 className="font-medium">Recent Assignments</h4>
          <div className="space-y-2">
            {recentAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted/20 rounded">
                <div className="space-y-1">
                  <div className="text-sm font-medium">{assignment.athlete}</div>
                  <div className="text-xs text-muted-foreground">{assignment.program}</div>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant={getStatusColor(assignment.status)} className="text-xs">
                    {assignment.status}
                  </Badge>
                  <div className="text-xs text-muted-foreground">{assignment.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
