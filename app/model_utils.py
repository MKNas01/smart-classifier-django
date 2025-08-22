import torch
from ultralytics import YOLO
import os
import logging

logger = logging.getLogger(__name__)

def load_model():
    try:
        model_path = os.path.join(os.path.dirname(__file__), 'best.pt')
        logger.info(f"Loading model from: {model_path}")
        
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at {model_path}")
            
        model = YOLO(model_path)
        logger.info("Model loaded successfully")
        return model
    except Exception as e:
        logger.error(f"Error loading model: {str(e)}")
        return None

model = load_model()

def classify_image(image_path):
    if model is None:
        return {'error': 'Model not loaded'}
    
    try:
        results = model(image_path)
        
        if not results:
            return {'error': 'No results from model'}
            
        result = results[0]
        
        if not hasattr(result, 'boxes') or len(result.boxes) == 0:
            return {'error': 'No objects detected'}
            
        # Get the most confident detection
        boxes = result.boxes
        max_conf_idx = boxes.conf.argmax()
        class_id = int(boxes.cls[max_conf_idx])
        class_name = result.names[class_id]
        confidence = float(boxes.conf[max_conf_idx])
        
        return {
            'class': class_name,  # Single class name
            'confidence': confidence  # Confidence score
        }
            
    except Exception as e:
        return {'error': str(e)}