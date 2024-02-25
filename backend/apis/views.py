import io
import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pytesseract
from PIL import Image
from pdf2image import convert_from_bytes

@csrf_exempt
def upload(request):
    file = request.FILES["file"]
    images = []
    if file.content_type == 'application/pdf':
        images = convert_from_bytes(file.read())
    else:
        images = [Image.open(io.BytesIO(file.read()))]
    output = [pytesseract.image_to_string(f) for f in images]
    return HttpResponse(json.dumps(output).encode(), content_type='application/json')
