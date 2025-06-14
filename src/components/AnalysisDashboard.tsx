import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Camera, 
  Film, 
  BarChart3, 
  Clock, 
  Palette,
  Play,
  Pause
} from "lucide-react";
import { ShotDetection } from "./ShotDetection";
import { CinematographyMetrics } from "./CinematographyMetrics";
import { NarrativeAnalysis } from "./NarrativeAnalysis";

interface AnalysisDashboardProps {
  video: File;
  results: any;
  onNewVideo: () => void;
}

export const AnalysisDashboard = ({ video, results, onNewVideo }: AnalysisDashboardProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTab, setCurrentTab] = useState("overview");

  useEffect(() => {
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsAnalyzing(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const mockResults = {
    duration: "2:34",
    totalShots: 47,
    avgShotLength: "3.2s",
    dominantColors: ["#1a1a1a", "#d4af37", "#8b4513"],
    cameraMovements: {
      static: 23,
      pan: 12,
      tilt: 8,
      zoom: 4
    },
    narrativeBeats: [
      { time: "0:15", type: "Setup", confidence: 0.92 },
      { time: "1:12", type: "Conflict", confidence: 0.87 },
      { time: "2:01", type: "Climax", confidence: 0.94 },
      { time: "2:28", type: "Resolution", confidence: 0.89 }
    ]
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          onClick={onNewVideo}
          className="text-cinematic-gold hover:text-cinematic-gold/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Upload New Video
        </Button>
        <div>
          <h1 className="text-2xl font-cinematic font-bold text-foreground">
            {video.name}
          </h1>
          <p className="text-muted-foreground">
            {(video.size / (1024 * 1024)).toFixed(1)} MB • Analyzing...
          </p>
        </div>
      </div>

      {isAnalyzing ? (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Film className="w-5 h-5 animate-spin" />
              Processing Video
            </CardTitle>
            <CardDescription>
              Analyzing cinematography techniques and narrative structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={progress} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shot detection, color analysis, camera movement tracking...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="shots">Shot Analysis</TabsTrigger>
            <TabsTrigger value="cinematography">Cinematography</TabsTrigger>
            <TabsTrigger value="narrative">Narrative</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Inspiration Banner */}
            <Card className="bg-gradient-to-r from-cinematic-gold/10 to-transparent border-cinematic-gold/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center">
                    <Film className="w-6 h-6 text-cinematic-black" />
                  </div>
                  <div>
                    <h3 className="font-cinematic text-lg font-semibold text-cinematic-gold mb-1">
                      Cinematography Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Your footage shows techniques similar to works by Emmanuel Lubezki in "The Revenant" 
                      - natural lighting and fluid camera movement create immersive storytelling.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Shots</CardTitle>
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockResults.totalShots}</div>
                  <p className="text-xs text-muted-foreground">
                    Avg length: {mockResults.avgShotLength}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Duration</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockResults.duration}</div>
                  <p className="text-xs text-muted-foreground">
                    Feature length analysis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Color Palette</CardTitle>
                  <Palette className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-2">
                    {mockResults.dominantColors.map((color, i) => (
                      <div 
                        key={i}
                        className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dominant colors detected
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Narrative Structure</CardTitle>
                  <CardDescription>
                    AI-detected story beats following classical three-act structure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockResults.narrativeBeats.map((beat, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card/50">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{beat.time}</Badge>
                          <span className="font-medium">{beat.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground">
                            {Math.round(beat.confidence * 100)}% confidence
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Master's Technique
                  </CardTitle>
                  <CardDescription>
                    Learn from legendary cinematographers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-cinematic-gold/5 rounded-lg border border-cinematic-gold/20">
                    <h4 className="font-semibold text-cinematic-gold mb-2">Similar to "Blade Runner 2049"</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your color grading and composition echo Roger Deakins' work - using warm/cool contrast 
                      to enhance the emotional narrative.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-cinematic-gold text-cinematic-black">Color Theory</Badge>
                      <Badge variant="outline">Composition</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-cinematic-gold/5 rounded-lg border border-cinematic-gold/20">
                    <h4 className="font-semibold text-cinematic-gold mb-2">Kubrick's Symmetry</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your framing shows influence from "The Shining" - perfect symmetry creates 
                      psychological tension and visual harmony.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-cinematic-gold text-cinematic-black">Framing</Badge>
                      <Badge variant="outline">Psychology</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shots">
            <ShotDetection video={video} results={mockResults} />
          </TabsContent>

          <TabsContent value="cinematography">
            <CinematographyMetrics video={video} results={mockResults} />
          </TabsContent>

          <TabsContent value="narrative">
            <NarrativeAnalysis video={video} results={mockResults} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};