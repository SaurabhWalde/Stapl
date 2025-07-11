
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AlertTriangle, ChevronDown, Clock, Users } from 'lucide-react';

const mockAlerts = [
  {
    id: 1,
    type: "HRV Alert",
    message: "3 players have low HRV today",
    severity: "High",
    time: "10 minutes ago",
    affectedAthletes: ["Alex Johnson", "Mike Brown", "Sarah Williams"],
    suggestion: "Consider reducing training intensity and focus on recovery protocols."
  },
  {
    id: 2,
    type: "Sleep Alert",
    message: "5 athletes had poor sleep quality",
    severity: "Medium",
    time: "2 hours ago",
    affectedAthletes: ["Maria Garcia", "David Chen", "Lisa Park", "Tom Wilson", "Jake Miller"],
    suggestion: "Review sleep hygiene protocols and consider lighter training loads."
  },
  {
    id: 3,
    type: "Training Load",
    message: "Team weekly strain 20% above target",
    severity: "Medium",
    time: "1 day ago",
    affectedAthletes: ["Team Average"],
    suggestion: "Plan recovery day and adjust upcoming training intensity."
  },
];

export function RiskAlertsPanel() {
  const [expandedAlert, setExpandedAlert] = useState<number | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <span>Risk Alerts Feed</span>
          <Badge variant="destructive" className="text-xs">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockAlerts.map((alert) => (
          <Collapsible key={alert.id}>
            <CollapsibleTrigger asChild>
              <div 
                className="w-full p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => setExpandedAlert(expandedAlert === alert.id ? null : alert.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant={getSeverityColor(alert.severity)} className="text-xs">
                        {alert.severity}
                      </Badge>
                      <span className="text-sm font-medium">{alert.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{alert.time}</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="px-3 pb-3">
              <div className="mt-3 p-3 bg-muted/30 rounded-lg space-y-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Affected Athletes:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.affectedAthletes.map((athlete, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {athlete}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Suggested Action:</p>
                  <p className="text-sm text-muted-foreground">{alert.suggestion}</p>
                </div>
                <Button size="sm" className="mt-2">
                  Take Action
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}
