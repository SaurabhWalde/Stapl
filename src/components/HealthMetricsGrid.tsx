
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Moon, Thermometer, Droplets, Zap } from 'lucide-react';

const HealthMetricsGrid = () => {
  const metrics = [
    {
      icon: Heart,
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "good",
      subtitle: "Resting",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Activity,
      label: "HRV",
      value: "45",
      unit: "ms",
      status: "excellent",
      subtitle: "7-day avg",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Droplets,
      label: "SpO₂",
      value: "98",
      unit: "%",
      status: "good",
      subtitle: "Blood oxygen",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Thermometer,
      label: "Body Temp",
      value: "36.7",
      unit: "°C",
      status: "normal",
      subtitle: "Skin temp",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Moon,
      label: "Sleep Score",
      value: "87",
      unit: "%",
      status: "good",
      subtitle: "Last night",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      label: "Recovery",
      value: "82",
      unit: "%",
      status: "ready",
      subtitle: "Today",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-700';
      case 'good': return 'bg-blue-100 text-blue-700';
      case 'ready': return 'bg-green-100 text-green-700';
      case 'normal': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <Card key={index} className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <Badge variant="secondary" className={getStatusColor(metric.status)}>
                  {metric.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-sm text-gray-500">{metric.unit}</span>
                </div>
                <p className="text-xs text-gray-500">{metric.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HealthMetricsGrid;
