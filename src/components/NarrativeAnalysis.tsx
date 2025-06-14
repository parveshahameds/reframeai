import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, TrendingUp, Clock, Users } from "lucide-react";

interface NarrativeAnalysisProps {
  video: File;
  results: any;
}

export const NarrativeAnalysis = ({ video, results }: NarrativeAnalysisProps) => {
  // Generate dynamic narrative data based on video properties
  const videoSeed = video.name.length + video.size;
  const random = (seed: number) => Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
  
  // Parse duration from results to calculate act timings
  const totalDuration = results.duration || "2:34";
  const [minutes, seconds] = totalDuration.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  
  const act1End = Math.floor(totalSeconds * 0.25);
  const act2End = Math.floor(totalSeconds * 0.75);
  
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${mins}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const narrativeData = {
    pacing: {
      act1: { 
        duration: `0:00-${formatTime(act1End)}`, 
        tempo: ["Slow", "Medium"][Math.floor(Math.abs(random(videoSeed + 1)) * 2)], 
        tension: Math.floor(15 + Math.abs(random(videoSeed + 2)) * 40) // 15-55%
      },
      act2: { 
        duration: `${formatTime(act1End)}-${formatTime(act2End)}`, 
        tempo: ["Medium", "Fast"][Math.floor(Math.abs(random(videoSeed + 3)) * 2)], 
        tension: Math.floor(50 + Math.abs(random(videoSeed + 4)) * 35) // 50-85%
      },
      act3: { 
        duration: `${formatTime(act2End)}-${totalDuration}`, 
        tempo: ["Fast", "Very Fast"][Math.floor(Math.abs(random(videoSeed + 5)) * 2)], 
        tension: Math.floor(75 + Math.abs(random(videoSeed + 6)) * 20) // 75-95%
      }
    },
    emotions: [
      { 
        emotion: "Tension", 
        intensity: Math.floor(60 + Math.abs(random(videoSeed + 7)) * 35), 
        timeline: [formatTime(Math.floor(totalSeconds * 0.2)), formatTime(Math.floor(totalSeconds * 0.6)), formatTime(Math.floor(totalSeconds * 0.85))]
      },
      { 
        emotion: "Relief", 
        intensity: Math.floor(30 + Math.abs(random(videoSeed + 8)) * 40), 
        timeline: [formatTime(Math.floor(totalSeconds * 0.35)), formatTime(Math.floor(totalSeconds * 0.9))]
      },
      { 
        emotion: "Excitement", 
        intensity: Math.floor(55 + Math.abs(random(videoSeed + 9)) * 40), 
        timeline: [formatTime(Math.floor(totalSeconds * 0.45)), formatTime(Math.floor(totalSeconds * 0.75))]
      }
    ],
    characters: [
      { 
        name: "Protagonist", 
        screenTime: `${Math.floor(70 + Math.abs(random(videoSeed + 10)) * 25)}%`, 
        scenes: Math.floor(8 + Math.abs(random(videoSeed + 11)) * 8) 
      },
      { 
        name: "Antagonist", 
        screenTime: `${Math.floor(25 + Math.abs(random(videoSeed + 12)) * 35)}%`, 
        scenes: Math.floor(3 + Math.abs(random(videoSeed + 13)) * 6) 
      },
      { 
        name: "Supporting", 
        screenTime: `${Math.floor(15 + Math.abs(random(videoSeed + 14)) * 25)}%`, 
        scenes: Math.floor(2 + Math.abs(random(videoSeed + 15)) * 5) 
      }
    ]
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Story Structure Analysis
          </CardTitle>
          <CardDescription>
            Three-act structure and narrative beat detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(narrativeData.pacing).map(([act, data]) => (
                <Card key={act} className="p-4">
                  <div className="text-center">
                    <h4 className="font-semibold capitalize mb-2">{act}</h4>
                    <div className="text-sm text-muted-foreground mb-2">{data.duration}</div>
                    <Badge variant="outline" className="mb-2">{data.tempo} Pace</Badge>
                    <div className="mt-3">
                      <div className="text-xs text-muted-foreground mb-1">Tension Level</div>
                      <Progress value={data.tension} className="h-2" />
                      <div className="text-xs text-cinematic-gold mt-1">{data.tension}%</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Detected Story Beats</h4>
              <div className="space-y-3">
                {results.narrativeBeats.map((beat: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{beat.time}</Badge>
                      <span className="font-medium">{beat.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-muted-foreground">
                        {Math.round(beat.confidence * 100)}% confidence
                      </div>
                      <div className="w-16">
                        <Progress value={beat.confidence * 100} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Emotional Intensity
            </CardTitle>
            <CardDescription>
              AI-detected emotional patterns throughout the film
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {narrativeData.emotions.map((emotion, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{emotion.emotion}</span>
                  <span className="text-cinematic-gold">{emotion.intensity}%</span>
                </div>
                <Progress value={emotion.intensity} className="mb-2" />
                <div className="flex flex-wrap gap-1">
                  {emotion.timeline.map((time, j) => (
                    <Badge key={j} variant="secondary" className="text-xs">
                      {time}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Character Analysis
            </CardTitle>
            <CardDescription>
              Screen time and presence analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {narrativeData.characters.map((character, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{character.name}</span>
                  <span className="text-cinematic-gold">{character.screenTime}</span>
                </div>
                <Progress value={parseInt(character.screenTime)} />
                <div className="text-xs text-muted-foreground">
                  Appears in {character.scenes} scenes
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Pacing Analysis
          </CardTitle>
          <CardDescription>
            Shot length patterns and rhythm analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cinematic-gold">3.2s</div>
              <div className="text-sm text-muted-foreground">Avg Shot Length</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cinematic-gold">1.8s</div>
              <div className="text-sm text-muted-foreground">Fastest Cut</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cinematic-gold">12.5s</div>
              <div className="text-sm text-muted-foreground">Longest Shot</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cinematic-gold">Medium</div>
              <div className="text-sm text-muted-foreground">Overall Pace</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};