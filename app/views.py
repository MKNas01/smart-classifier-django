from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .model_utils import classify_image
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import logging

logger = logging.getLogger(__name__)

@csrf_exempt
def index(request):
    if request.method == 'POST' and request.FILES.get('image'):
        try:
            uploaded_file = request.FILES['image']
            fs = FileSystemStorage()
            filename = fs.save(uploaded_file.name, uploaded_file)
            result = classify_image(fs.path(filename))
            
            if 'error' in result:
                return JsonResponse({'error': result['error']}, status=400)
                
            return JsonResponse({
                'class': result['class'],  # Consistent field name
                'confidence': result['confidence'],
                'image_url': fs.url(filename)
            })
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return render(request, 'index.html')