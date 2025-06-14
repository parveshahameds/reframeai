import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Film, FileVideo } from "lucide-react";

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
          Film Analysis AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Advanced computer vision system for analyzing cinematography techniques and narrative structure
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileVideo className="w-5 h-5" />
            Upload Video for Analysis
          </CardTitle>
          <CardDescription>
            Support for MP4, MOV, AVI formats. Maximum file size: 500MB
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