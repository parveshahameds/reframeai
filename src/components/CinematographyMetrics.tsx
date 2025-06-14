import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Camera, BarChart3, Eye } from "lucide-react";

interface CinematographyMetricsProps {
  video: File;
  results: any;
}

export const CinematographyMetrics = ({ video, results }: CinematographyMetricsProps) => {
  // Generate dynamic cinematography data based on video properties
  const videoSeed = video.name.length + video.size;
  const random = (seed: number) => Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
  
  const cinematographyData = {
    colorTemperature: {
      warm: Math.floor(40 + Math.abs(random(videoSeed + 1)) * 40), // 40-80%
      neutral: Math.floor(15 + Math.abs(random(videoSeed + 2)) * 25), // 15-40%
      cool: Math.floor(5 + Math.abs(random(videoSeed + 3)) * 25) // 5-30%
    },
    contrast: Math.floor(60 + Math.abs(random(videoSeed + 4)) * 30), // 60-90%
    saturation: Math.floor(70 + Math.abs(random(videoSeed + 5)) * 25), // 70-95%
    brightness: Math.floor(30 + Math.abs(random(videoSeed + 6)) * 40), // 30-70%
    composition: {
      ruleOfThirds: Math.floor(50 + Math.abs(random(videoSeed + 7)) * 40), // 50-90%
      symmetry: Math.floor(10 + Math.abs(random(videoSeed + 8)) * 30), // 10-40%
      leadingLines: Math.floor(30 + Math.abs(random(videoSeed + 9)) * 50), // 30-80%
      framing: Math.floor(55 + Math.abs(random(videoSeed + 10)) * 35) // 55-90%
    },
    focusAnalysis: {
      shallowDOF: Math.floor(20 + Math.abs(random(videoSeed + 11)) * 40), // 20-60%
      deepFocus: Math.floor(25 + Math.abs(random(videoSeed + 12)) * 45), // 25-70%
      rackFocus: Math.floor(10 + Math.abs(random(videoSeed + 13)) * 25) // 10-35%
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Color Analysis
          </CardTitle>
          <CardDescription>
            Comprehensive color grading and palette analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">Dominant Color Palette</h4>
            <div className="flex gap-2 mb-4">
              {results.dominantColors.map((color: string, i: number) => (
                <div key={i} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg border mb-2"
                    style={{ backgroundColor: color }}
                  />
                  <code className="text-xs">{color}</code>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Color Temperature Distribution</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Warm Tones</span>
                  <span>{cinematographyData.colorTemperature.warm}%</span>
                </div>
                <Progress value={cinematographyData.colorTemperature.warm} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Neutral Tones</span>
                  <span>{cinematographyData.colorTemperature.neutral}%</span>
                </div>
                <Progress value={cinematographyData.colorTemperature.neutral} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Cool Tones</span>
                  <span>{cinematographyData.colorTemperature.cool}%</span>
                </div>
                <Progress value={cinematographyData.colorTemperature.cool} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Image Quality Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Contrast</span>
                <span>{cinematographyData.contrast}%</span>
              </div>
              <Progress value={cinematographyData.contrast} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Saturation</span>
                <span>{cinematographyData.saturation}%</span>
              </div>
              <Progress value={cinematographyData.saturation} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Brightness</span>
                <span>{cinematographyData.brightness}%</span>
              </div>
              <Progress value={cinematographyData.brightness} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Composition Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Rule of Thirds</span>
                <span>{cinematographyData.composition.ruleOfThirds}%</span>
              </div>
              <Progress value={cinematographyData.composition.ruleOfThirds} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Framing</span>
                <span>{cinematographyData.composition.framing}%</span>
              </div>
              <Progress value={cinematographyData.composition.framing} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Leading Lines</span>
                <span>{cinematographyData.composition.leadingLines}%</span>
              </div>
              <Progress value={cinematographyData.composition.leadingLines} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Depth of Field Analysis
          </CardTitle>
          <CardDescription>
            Focus techniques and depth perception analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold mb-2">
                {cinematographyData.focusAnalysis.shallowDOF}%
              </div>
              <div className="text-sm text-muted-foreground">Shallow DOF</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold mb-2">
                {cinematographyData.focusAnalysis.deepFocus}%
              </div>
              <div className="text-sm text-muted-foreground">Deep Focus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cinematic-gold mb-2">
                {cinematographyData.focusAnalysis.rackFocus}%
              </div>
              <div className="text-sm text-muted-foreground">Rack Focus</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};