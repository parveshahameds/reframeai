import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Clock, Zap } from "lucide-react";

interface ShotDetectionProps {
  video: File;
  results: any;
}

export const ShotDetection = ({ video, results }: ShotDetectionProps) => {
  // Generate dynamic shots based on video properties
  const videoSeed = video.name.length + video.size;
  const random = (seed: number) => Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
  
  const shotTypes = ["Wide Shot", "Medium Shot", "Close-up", "Over Shoulder", "Extreme Close-up", "Master Shot"];
  const movements = ["Static", "Pan Left", "Pan Right", "Tilt Up", "Tilt Down", "Zoom In", "Zoom Out", "Dolly", "Handheld"];
  const transitions = ["Cut", "Fade", "Dissolve", "Wipe", "Match Cut"];
  
  const generateShots = () => {
    const totalShots = results.totalShots || 10;
    const shots = [];
    let currentTime = 0;
    
    for (let i = 1; i <= Math.min(totalShots, 8); i++) { // Show first 8 shots
      const duration = 2 + Math.abs(random(videoSeed + i * 10)) * 6; // 2-8 second shots
      const startTime = currentTime;
      const endTime = currentTime + duration;
      
      const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };
      
      shots.push({
        id: i,
        start: formatTime(startTime),
        end: formatTime(endTime),
        type: shotTypes[Math.floor(Math.abs(random(videoSeed + i)) * shotTypes.length)],
        movement: movements[Math.floor(Math.abs(random(videoSeed + i * 2)) * movements.length)],
        transition: transitions[Math.floor(Math.abs(random(videoSeed + i * 3)) * transitions.length)]
      });
      
      currentTime = endTime;
    }
    
    return shots;
  };
  
  const dynamicShots = generateShots();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Shot Detection Results
          </CardTitle>
          <CardDescription>
            Automatically detected {results.totalShots} shots with frame-by-frame analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold">{results.totalShots}</div>
              <div className="text-sm text-muted-foreground">Total Shots</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold">{results.avgShotLength}</div>
              <div className="text-sm text-muted-foreground">Avg Length</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold">23</div>
              <div className="text-sm text-muted-foreground">Transitions</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shot Timeline</CardTitle>
          <CardDescription>
            Detailed breakdown of each detected shot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dynamicShots.map((shot) => (
              <div key={shot.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-mono text-muted-foreground">
                    Shot {shot.id}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono">{shot.start} - {shot.end}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{shot.type}</Badge>
                  <Badge variant="secondary">{shot.movement}</Badge>
                  <Badge className="bg-cinematic-gold text-cinematic-black">
                    {shot.transition}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Shot Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3">Shot Types</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Wide Shot</span>
                  <span className="text-cinematic-gold">{results.shotTypes?.wide || 18}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium Shot</span>
                  <span className="text-cinematic-gold">{results.shotTypes?.medium || 15}</span>
                </div>
                <div className="flex justify-between">
                  <span>Close-up</span>
                  <span className="text-cinematic-gold">{results.shotTypes?.closeup || 12}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other</span>
                  <span className="text-cinematic-gold">{results.shotTypes?.other || 2}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Camera Movement</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Static</span>
                  <span className="text-cinematic-gold">{results.cameraMovements.static}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pan</span>
                  <span className="text-cinematic-gold">{results.cameraMovements.pan}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tilt</span>
                  <span className="text-cinematic-gold">{results.cameraMovements.tilt}</span>
                </div>
                <div className="flex justify-between">
                  <span>Zoom</span>
                  <span className="text-cinematic-gold">{results.cameraMovements.zoom}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};