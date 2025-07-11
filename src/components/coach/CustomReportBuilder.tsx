
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FileText, Download, Calendar as CalendarIcon, Settings } from 'lucide-react';
import { format } from 'date-fns';

const availableMetrics = [
  "Heart Rate Variability",
  "Sleep Quality",
  "Training Load",
  "Recovery Score",
  "Performance Metrics",
  "Injury Risk Indicators",
  "Compliance Rates",
  "Workout Completion"
];

export function CustomReportBuilder() {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleMetricToggle = (metric: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metric)
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    );
  };

  const generateReport = (format: 'PDF' | 'CSV') => {
    console.log(`Generating ${format} report with metrics:`, selectedMetrics);
    console.log('Date range:', dateRange);
    // Here you would implement the actual report generation logic
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-purple-500" />
          <span>Custom Report Builder</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Metrics Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Select Metrics</h4>
              <Badge variant="secondary">{selectedMetrics.length} selected</Badge>
            </div>
            
            <div className="space-y-3">
              {availableMetrics.map((metric) => (
                <div key={metric} className="flex items-center space-x-2">
                  <Checkbox
                    id={metric}
                    checked={selectedMetrics.includes(metric)}
                    onCheckedChange={() => handleMetricToggle(metric)}
                  />
                  <label
                    htmlFor={metric}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {metric}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Date Range and Options */}
          <div className="space-y-4">
            <h4 className="font-medium">Report Settings</h4>
            
            {/* Date Range Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Quick Date Presets */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quick Presets</label>
              <div className="flex flex-wrap gap-2">
                {["Last 7 days", "Last 30 days", "This Month", "Last Month"].map((preset) => (
                  <Button key={preset} variant="outline" size="sm">
                    {preset}
                  </Button>
                ))}
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Checkbox id="includeCharts" />
                <label htmlFor="includeCharts" className="text-sm">Include Charts & Graphs</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="anonymizeData" />
                <label htmlFor="anonymizeData" className="text-sm">Anonymize Athlete Data</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="includeRecommendations" />
                <label htmlFor="includeRecommendations" className="text-sm">Include AI Recommendations</label>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Report Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {selectedMetrics.length} metrics selected
            </span>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => generateReport('CSV')}
              disabled={selectedMetrics.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button
              onClick={() => generateReport('PDF')}
              disabled={selectedMetrics.length === 0}
            >
              <FileText className="w-4 h-4 mr-2" />
              Generate PDF Report
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
