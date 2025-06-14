import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Film, FileVideo, Camera, Palette } from "lucide-react";

interface VideoUploadProps {
  onVideoSelect: (file: File) => void;
}

export const VideoUpload = ({ onVideoSelect }: VideoUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const videoFile = files.find(file => file.type.startsWith('video/'));
    
    if (videoFile) {
      onVideoSelect(videoFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onVideoSelect(file);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 bg-cinematic-gold rounded-full">
            <Film className="w-12 h-12 text-cinematic-black" />
          </div>
        </div>
        <h1 className="text-4xl font-cinematic font-bold text-foreground mb-4">
          <span className="text-cinematic-gold">"Every frame a painting"</span>
          <br />
          Film Analysis AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Master the art of cinematography through AI-powered analysis. Learn from the masters, 
          understand visual storytelling, and elevate your filmmaking craft.
        </p>
        
        {/* Cinematic Quote */}
        <div className="bg-card/50 backdrop-blur-sm border border-cinematic-gold/20 rounded-lg p-6 max-w-3xl mx-auto mb-8">
          <blockquote className="text-lg font-cinematic italic text-cinematic-gold mb-3">
            "The visual information of the film should be as rich as the verbal information. 
            Every frame should be a painting."
          </blockquote>
          <cite className="text-sm text-muted-foreground">— Roger Deakins, ASC, BSC</cite>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cinematic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="w-8 h-8 text-cinematic-gold" />
            </div>
            <h3 className="font-semibold mb-2">Shot Composition</h3>
            <p className="text-sm text-muted-foreground">Analyze rule of thirds, leading lines, and framing techniques used by masters</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cinematic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Palette className="w-8 h-8 text-cinematic-gold" />
            </div>
            <h3 className="font-semibold mb-2">Color Theory</h3>
            <p className="text-sm text-muted-foreground">Understand color palettes and emotional impact like Blade Runner 2049</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cinematic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Film className="w-8 h-8 text-cinematic-gold" />
            </div>
            <h3 className="font-semibold mb-2">Visual Storytelling</h3>
            <p className="text-sm text-muted-foreground">Decode narrative techniques from Kubrick to Villeneuve</p>
          </div>
        </div>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileVideo className="w-5 h-5" />
            Upload Video for Analysis
          </CardTitle>
          <CardDescription>
            Upload your film scene and get insights on cinematography techniques used by masters like 
            Deakins, Lubezki, and Chivo. Support for MP4, MOV, AVI formats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              isDragging 
                ? "border-cinematic-gold bg-cinematic-gold/10" 
                : "border-border hover:border-cinematic-gold/50"
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
          >
            <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Drop your video file here
            </h3>
            <p className="text-muted-foreground mb-6">
              or click to browse and select a file
            </p>
            <Button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-cinematic-gold hover:bg-cinematic-gold/90 text-cinematic-black"
            >
              Select Video File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};