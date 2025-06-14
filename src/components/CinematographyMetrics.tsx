import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Camera, BarChart3, Eye } from "lucide-react";

interface CinematographyMetricsProps {
  video: File;
  results: any;
}

export const CinematographyMetrics = ({ video, results }: CinematographyMetricsProps) => {
  const cinematographyData = {
    colorTemperature: {
      warm: 65,
      neutral: 25,
      cool: 10
    },
    contrast: 78,
    saturation: 82,
    brightness: 45,
    composition: {
      ruleOfThirds: 73,
      symmetry: 23,
      leadingLines: 45,
      framing: 67
    },
    focusAnalysis: {
      shallowDOF: 34,
      deepFocus: 42,
      rackFocus: 24
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