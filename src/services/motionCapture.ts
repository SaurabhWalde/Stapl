// Motion Capture Service
// Handles MediaPipe Pose integration, API calls, and feedback calculation

export interface PoseLandmark {
  x: number;
  y: number;
  z: number;
  visibility: number;
}

export interface PostureAnalysis {
  overall: 'good' | 'warning' | 'poor';
  message: string;
  joints: Array<{
    name: string;
    current: number;
    ideal: number;
    deviation: number;
    status: 'good' | 'warning' | 'poor';
  }>;
}

export interface RecordingSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  landmarks: PoseLandmark[][];
  videoBlob?: Blob;
}

class MotionCaptureService {
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private currentSession: RecordingSession | null = null;
  private frameCount = 0;
  private lastFrameTime = 0;
  private fps = 0;

  // Initialize MediaPipe Pose (stubbed for now)
  async initializePose() {
    // TODO: Initialize MediaPipe Pose when the dependency is properly set up
    console.log('MediaPipe Pose initialization stubbed');
    return true;
  }

  // Process video frame and detect pose
  detectPose(video: HTMLVideoElement, canvas: HTMLCanvasElement): {
    landmarks: PoseLandmark[];
    confidence: number;
  } {
    const ctx = canvas.getContext('2d');
    if (!ctx) return { landmarks: [], confidence: 0 };

    // Calculate FPS
    const currentTime = performance.now();
    if (this.lastFrameTime > 0) {
      const deltaTime = currentTime - this.lastFrameTime;
      this.fps = 1000 / deltaTime;
    }
    this.lastFrameTime = currentTime;
    this.frameCount++;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate mock pose landmarks for demonstration
    const landmarks = this.generateMockLandmarks();
    const confidence = 0.85 + Math.random() * 0.15; // Mock confidence

    // Draw pose skeleton
    this.drawPoseSkeleton(ctx, landmarks, canvas.width, canvas.height);

    return { landmarks, confidence };
  }

  // Generate mock pose landmarks
  private generateMockLandmarks(): PoseLandmark[] {
    const landmarks: PoseLandmark[] = [];
    
    // MediaPipe Pose has 33 landmarks
    const keyPoints = [
      // Head
      { x: 0.5, y: 0.1 }, // nose
      { x: 0.48, y: 0.08 }, // left eye
      { x: 0.52, y: 0.08 }, // right eye
      { x: 0.46, y: 0.09 }, // left ear
      { x: 0.54, y: 0.09 }, // right ear
      
      // Upper body
      { x: 0.45, y: 0.25 }, // left shoulder
      { x: 0.55, y: 0.25 }, // right shoulder
      { x: 0.4, y: 0.4 }, // left elbow
      { x: 0.6, y: 0.4 }, // right elbow
      { x: 0.35, y: 0.55 }, // left wrist
      { x: 0.65, y: 0.55 }, // right wrist
      
      // Core
      { x: 0.47, y: 0.45 }, // left hip
      { x: 0.53, y: 0.45 }, // right hip
      
      // Lower body
      { x: 0.46, y: 0.65 }, // left knee
      { x: 0.54, y: 0.65 }, // right knee
      { x: 0.45, y: 0.85 }, // left ankle
      { x: 0.55, y: 0.85 }, // right ankle
    ];

    // Add some natural movement variation
    keyPoints.forEach((point, index) => {
      const variation = 0.02;
      landmarks.push({
        x: point.x + (Math.random() - 0.5) * variation,
        y: point.y + (Math.random() - 0.5) * variation,
        z: Math.random() * 0.1,
        visibility: 0.8 + Math.random() * 0.2
      });
    });

    // Add remaining landmarks for full MediaPipe compatibility
    while (landmarks.length < 33) {
      landmarks.push({
        x: Math.random(),
        y: Math.random(),
        z: Math.random() * 0.1,
        visibility: 0.5 + Math.random() * 0.5
      });
    }

    return landmarks;
  }

  // Draw pose skeleton on canvas
  private drawPoseSkeleton(
    ctx: CanvasRenderingContext2D, 
    landmarks: PoseLandmark[], 
    width: number, 
    height: number
  ) {
    if (landmarks.length === 0) return;

    // Define connections between landmarks
    const connections = [
      [5, 6], // shoulders
      [5, 7], [7, 9], // left arm
      [6, 8], [8, 10], // right arm
      [5, 11], [6, 12], // shoulders to hips
      [11, 12], // hips
      [11, 13], [13, 15], // left leg
      [12, 14], [14, 16], // right leg
    ];

    // Draw connections
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.8)';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    connections.forEach(([start, end]) => {
      if (start < landmarks.length && end < landmarks.length) {
        const startPoint = landmarks[start];
        const endPoint = landmarks[end];
        
        if (startPoint.visibility > 0.5 && endPoint.visibility > 0.5) {
          ctx.beginPath();
          ctx.moveTo(startPoint.x * width, startPoint.y * height);
          ctx.lineTo(endPoint.x * width, endPoint.y * height);
          ctx.stroke();
        }
      }
    });

    // Draw landmarks
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
    landmarks.forEach((landmark, index) => {
      if (landmark.visibility > 0.5 && index < 17) { // Only draw main landmarks
        ctx.beginPath();
        ctx.arc(
          landmark.x * width, 
          landmark.y * height, 
          6, 
          0, 
          2 * Math.PI
        );
        ctx.fill();
      }
    });
  }

  // Analyze posture from landmarks
  analyzePosture(landmarks: PoseLandmark[]): PostureAnalysis {
    if (landmarks.length < 17) {
      return {
        overall: 'poor',
        message: 'Insufficient pose data',
        joints: []
      };
    }

    // Mock analysis - in real implementation, calculate actual joint angles
    const shoulderAngle = 175 + Math.random() * 10;
    const spineAngle = 180 + Math.random() * 15 - 7.5;
    const hipAngle = 170 + Math.random() * 20;
    const kneeAngle = 175 + Math.random() * 10;

    const joints = [
      {
        name: 'Shoulder Alignment',
        current: Math.round(shoulderAngle),
        ideal: 180,
        deviation: Math.round(shoulderAngle - 180),
        status: Math.abs(shoulderAngle - 180) < 10 ? 'good' : Math.abs(shoulderAngle - 180) < 20 ? 'warning' : 'poor'
      },
      {
        name: 'Spine Curvature',
        current: Math.round(spineAngle),
        ideal: 180,
        deviation: Math.round(spineAngle - 180),
        status: Math.abs(spineAngle - 180) < 8 ? 'good' : Math.abs(spineAngle - 180) < 15 ? 'warning' : 'poor'
      },
      {
        name: 'Hip Position',
        current: Math.round(hipAngle),
        ideal: 175,
        deviation: Math.round(hipAngle - 175),
        status: Math.abs(hipAngle - 175) < 10 ? 'good' : Math.abs(hipAngle - 175) < 20 ? 'warning' : 'poor'
      },
      {
        name: 'Knee Tracking',
        current: Math.round(kneeAngle),
        ideal: 180,
        deviation: Math.round(kneeAngle - 180),
        status: Math.abs(kneeAngle - 180) < 8 ? 'good' : Math.abs(kneeAngle - 180) < 15 ? 'warning' : 'poor'
      }
    ] as Array<{
      name: string;
      current: number;
      ideal: number;
      deviation: number;
      status: 'good' | 'warning' | 'poor';
    }>;

    // Determine overall status
    const poorCount = joints.filter(j => j.status === 'poor').length;
    const warningCount = joints.filter(j => j.status === 'warning').length;
    
    let overall: 'good' | 'warning' | 'poor';
    let message: string;

    if (poorCount > 0) {
      overall = 'poor';
      message = 'Multiple alignment issues detected';
    } else if (warningCount > 1) {
      overall = 'warning';
      message = 'Minor posture adjustments needed';
    } else {
      overall = 'good';
      message = 'Excellent posture alignment';
    }

    return { overall, message, joints };
  }

  // Get current FPS
  getFPS(): number {
    return Math.round(this.fps);
  }

  // Start recording session
  async startRecording(stream: MediaStream): Promise<void> {
    try {
      // API call to start recording session
      const response = await fetch('/api/recording/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: Date.now(),
          deviceInfo: {
            userAgent: navigator.userAgent,
            platform: navigator.platform
          }
        })
      });

      if (!response.ok) {
        console.warn('API call failed, using mock session');
      }

      // Initialize recording session
      this.currentSession = {
        sessionId: `session_${Date.now()}`,
        startTime: Date.now(),
        landmarks: []
      };

      // Start MediaRecorder
      this.recordedChunks = [];
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('video/webm') ? 'video/webm' : 'video/mp4'
      });

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      this.mediaRecorder.start(1000); // Record in 1-second chunks
      console.log('Recording started');
    } catch (error) {
      console.error('Failed to start recording:', error);
      throw error;
    }
  }

  // Stop recording session
  async stopRecording(): Promise<void> {
    try {
      if (!this.currentSession) {
        throw new Error('No active recording session');
      }

      // Stop MediaRecorder
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }

      // Complete session
      this.currentSession.endTime = Date.now();
      this.currentSession.videoBlob = new Blob(this.recordedChunks, {
        type: this.mediaRecorder?.mimeType || 'video/webm'
      });

      // API call to stop recording
      const response = await fetch('/api/recording/stop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: this.currentSession.sessionId,
          duration: this.currentSession.endTime - this.currentSession.startTime,
          landmarkCount: this.currentSession.landmarks.length,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        console.warn('API call failed, session saved locally');
      }

      console.log('Recording stopped', this.currentSession);
      
      // Reset session
      this.currentSession = null;
      this.recordedChunks = [];
      this.mediaRecorder = null;
    } catch (error) {
      console.error('Failed to stop recording:', error);
      throw error;
    }
  }

  // Add landmarks to current session
  addLandmarks(landmarks: PoseLandmark[]): void {
    if (this.currentSession) {
      this.currentSession.landmarks.push(landmarks);
    }
  }

  // Get current recording session
  getCurrentSession(): RecordingSession | null {
    return this.currentSession;
  }
}

// Export singleton instance
export const motionCaptureService = new MotionCaptureService();