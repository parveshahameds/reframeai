import { Navigation } from "@/components/Navigation";
import { VideoUpload } from "@/components/VideoUpload";
import { AnalysisDashboard } from "@/components/AnalysisDashboard";
import { useState } from "react";

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {!currentVideo ? (
          <VideoUpload onVideoSelect={setCurrentVideo} />
        ) : (
          <AnalysisDashboard 
            video={currentVideo} 
            results={analysisResults}
            onNewVideo={() => setCurrentVideo(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;