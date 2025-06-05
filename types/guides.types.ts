export interface GuideStep {
  id: string;
  title: string;
  description: string;
  target: {
    selector: string;
    textMatch?: string;
    index?: number;
  };
  validation: {
    type: 'click' | 'visibility' | 'value' | 'custom';
    selector?: string;
    textMatch?: string;
    customValidator?: () => boolean;
  };
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  customPosition?: {
    x: number | 'center';
    y: number | 'center';
  };
  highlight?: boolean;
  dimBackground?: boolean;
  allowClickThrough?: boolean;
  showNextButton?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}

export interface GuideConfig {
  id: string;
  name: string;
  description: string;
  steps: GuideStep[];
  completionMessage?: string;
  analytics?: {
    category: string;
    trackSteps: boolean;
  };
}

export interface GuideState {
  activeGuide: string | null;
  currentStepIndex: number;
  completedSteps: string[];
  isVisible: boolean;
  isPaused: boolean;
  config?: GuideConfig;
}

export type GuideEventType = 
  | 'guideStarted' 
  | 'stepChanged' 
  | 'guideCompleted' 
  | 'stateChanged'
  | 'guidePaused'
  | 'guideResumed';

export interface GuideEvent {
  type: GuideEventType;
  payload: any;
}