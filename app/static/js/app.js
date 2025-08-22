// Waste information database
// Updated wasteInfo dictionary with exact model class name matches
const wasteInfo = {
  "Aerosols": {
    description: "Pressurized cans; residual propellants and contents can be hazardous.",
    impact: "Can explode or release VOCs; recycle only if fully empty and accepted locally.",
    harmfulness: 90
  },
  "Aluminum can": {
    description: "Common beverage cans; highly recyclable metal.",
    impact: "Recycling saves ~95% of the energy vs new aluminum.",
    harmfulness: 25
  },
  "Aluminum caps": {
    description: "Small aluminum closures from bottles/containers.",
    impact: "Recyclable if sorted; tiny items may be lost—collect in a larger metal can.",
    harmfulness: 40
  },
  "Cardboard": {
    description: "Corrugated fiberboard used for boxes and shipping.",
    impact: "Widely recyclable; flatten and keep dry to improve recovery.",
    harmfulness: 18
  },
  "Cellulose": {
    description: "Plant-fiber materials (e.g., some sponges/films).",
    impact: "Often biodegradable/compostable; check for coatings.",
    harmfulness: 15
  },
  "Ceramic": {
    description: "Inert pottery/ceramic wares.",
    impact: "Not typically curbside-recyclable; very slow to degrade in landfills.",
    harmfulness: 25
  },
  "Combined plastic": {
    description: "Multi-layer plastics fused with other materials.",
    impact: "Hard to recycle due to mixed layers; often landfill/incineration.",
    harmfulness: 80
  },
  "Container for household chemicals": {
    description: "Bottles/cans for cleaners, solvents, pesticides.",
    impact: "Residues may be hazardous; empty, triple-rinse or take to HHW events.",
    harmfulness: 90
  },
  "Disposable tableware": {
    description: "Single-use plates, cups, cutlery (often plastic or coated paper).",
    impact: "Low recycling rate; litter risk and microplastics.",
    harmfulness: 65
  },
  "Electronics": {
    description: "E-waste devices with boards, batteries, and heavy metals.",
    impact: "Toxic components; recycle via certified e-waste programs.",
    harmfulness: 95
  },
  "Foil": {
    description: "Thin aluminum sheets (kitchen foil, wrappers).",
    impact: "Recyclable if clean and balled up; small pieces get lost.",
    harmfulness: 30
  },
  "Furniture": {
    description: "Bulky items, often mixed materials.",
    impact: "Reuse/donate preferred; otherwise difficult to process.",
    harmfulness: 40
  },
  "Glass bottle": {
    description: "Beverage and food glass; infinitely recyclable.",
    impact: "High recycling potential if color-sorted and clean.",
    harmfulness: 15
  },
  "Iron utensils": {
    description: "Ferrous metal cookware/utensils.",
    impact: "Recyclable as scrap metal; heavy items last long in landfill.",
    harmfulness: 30
  },
  "Liquid": {
    description: "Unidentified liquid content.",
    impact: "May be hazardous; handle per label; never pour into drains.",
    harmfulness: 50
  },
  "Metal shavings": {
    description: "Fine metal offcuts from machining.",
    impact: "Collect and recycle as scrap; prevent waterway contamination.",
    harmfulness: 45
  },
  "Milk bottle": {
    description: "Usually glass (reusable) or HDPE plastic bottles.",
    impact: "Glass is recyclable/reusable; HDPE widely recyclable if clean.",
    harmfulness: 15
  },
  "Organic": {
    description: "Food scraps and yard/plant waste.",
    impact: "Compostable; landfill generates methane if not captured.",
    harmfulness: 5
  },
  "Paper bag": {
    description: "Kraft paper carry bags.",
    impact: "Recyclable and compostable when clean.",
    harmfulness: 15
  },
  "Paper cups": {
    description: "Paper cups often lined with plastic.",
    impact: "Harder to recycle due to lining; check local guidance.",
    harmfulness: 45
  },
  "Paper shavings": {
    description: "Small pieces or shredded paper.",
    impact: "Recyclable in paper streams if clean; bag to prevent litter.",
    harmfulness: 15
  },
  "Paper": {
    description: "Mixed paper (office, magazines, etc.).",
    impact: "Widely recyclable; keep dry and uncontaminated.",
    harmfulness: 20
  },
  "Papier mache": {
    description: "Paper pulp craft material.",
    impact: "Often compostable/biodegradable if uncoated and non-toxic.",
    harmfulness: 10
  },
  "Plastic bag": {
    description: "Thin film shopping bags.",
    impact: "High litter/microplastic risk; recycle via store drop-offs where available.",
    harmfulness: 85
  },
  "Plastic bottle": {
    description: "PET/HDPE bottles for beverages and detergents.",
    impact: "Widely recyclable if empty and capped; avoid contamination.",
    harmfulness: 85
  },
  "Plastic can": {
    description: "Rigid plastic container shaped like a can.",
    impact: "Recyclability depends on resin and locality.",
    harmfulness: 80
  },
  "Plastic canister": {
    description: "Larger rigid plastic container with lid/handle.",
    impact: "Empty, rinse; check resin code for recycling.",
    harmfulness: 85
  },
  "Plastic caps": {
    description: "Bottle/can closures; small items can be lost in sorting.",
    impact: "Often accepted if screwed back on bottles.",
    harmfulness: 70
  },
  "Plastic cup": {
    description: "Disposable plastic drink cups.",
    impact: "Low recycling rate; consider reusables.",
    harmfulness: 70
  },
  "Plastic shaker": {
    description: "Plastic shaker containers (e.g., seasoning/protein).",
    impact: "Rinse; recycling depends on resin and locality.",
    harmfulness: 70
  },
  "Plastic shavings": {
    description: "Small plastic offcuts/filings.",
    impact: "High microplastic risk; contain and dispose properly.",
    harmfulness: 75
  },
  "Plastic toys": {
    description: "Mixed-plastic items; often with metal/electronics.",
    impact: "Low recyclability; donate if usable.",
    harmfulness: 65
  },
  "Postal packaging": {
    description: "Mailers/boxes; often mixed materials and adhesives.",
    impact: "Separate paper from plastic bubble; flatten boxes.",
    harmfulness: 25
  },
  "Printing industry": {
    description: "Print waste: inked papers, plates, solvent containers.",
    impact: "May contain inks/solvents; manage via specialized recycling.",
    harmfulness: 70
  },
  "Scrap metal": {
    description: "Mixed metal items ready for recycling.",
    impact: "Valuable in metal recycling streams; keep free of non-metals.",
    harmfulness: 35
  },
  "Stretch film": {
    description: "Pallet/shrink wrap films.",
    impact: "Recycle via film-specific programs; avoid tangling MRF equipment.",
    harmfulness: 75
  },
  "Tetra pack": {
    description: "Cartons with paper/plastic/aluminum layers.",
    impact: "Recyclable where carton programs exist; otherwise difficult.",
    harmfulness: 60
  },
  "Textile": {
    description: "Clothing/fabrics; synthetics shed microfibers.",
    impact: "Reuse/donate preferred; textile recycling where available.",
    harmfulness: 60
  },
  "Tin": {
    description: "Steel/tinplate containers.",
    impact: "Commonly recyclable; remove food residues.",
    harmfulness: 40
  },
  "Unknown plastic": {
    description: "Plastic item with unclear resin or composition.",
    impact: "Hard to sort; often landfilled; minimize usage.",
    harmfulness: 80
  },
  "Wood": {
    description: "Untreated lumber/wood items.",
    impact: "Reusable/compostable when untreated; treated wood requires care.",
    harmfulness: 25
  },
  "Zip plastic bag": {
    description: "Reclosable plastic bags (zip-type).",
    impact: "Recycle with films where accepted; litter/microplastic risk.",
    harmfulness: 80
  },
  "Ramen Cup": {
    description: "Expanded polystyrene or coated paper noodle cups.",
    impact: "Rarely recyclable; high litter risk; consider alternatives.",
    harmfulness: 65
  },
  // Note: Your model doesn't have "food packet" but your dictionary does
  // You can either remove it or keep it for future model updates
};

// DOM Elements
const uploadModeBtn = document.getElementById('uploadModeBtn');
const cameraModeBtn = document.getElementById('cameraModeBtn');
const uploadSection = document.getElementById('uploadSection');
const cameraSection = document.getElementById('cameraSection');
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const previewImage = document.getElementById('previewImage');
const startCameraBtn = document.getElementById('startCameraBtn');
const stopCameraBtn = document.getElementById('stopCameraBtn');
const captureBtn = document.getElementById('captureBtn');
const cameraFeed = document.getElementById('cameraFeed');
const cameraCanvas = document.getElementById('cameraCanvas');
const resultSection = document.getElementById('resultSection');
const resultImage = document.getElementById('resultImage');
const materialName = document.getElementById('materialName');
const materialDescription = document.getElementById('materialDescription');
const materialImpact = document.getElementById('materialImpact');
const harmLevel = document.getElementById('harmLevel');
const harmPercentage = document.getElementById('harmPercentage');
const newClassificationBtn = document.getElementById('newClassificationBtn');
const loadingOverlay = document.getElementById('loadingOverlay');
const disposalRecommendation = document.getElementById('disposalRecommendation');
const uploadForm = document.getElementById('uploadForm');

// Global variables
let stream = null;
let currentMode = 'upload';

// Initialize the application
function init() {
    setupEventListeners();
    switchMode('upload');
}

// Set up all event listeners
function setupEventListeners() {
    // Mode switching
    uploadModeBtn.addEventListener('click', () => switchMode('upload'));
    cameraModeBtn.addEventListener('click', () => switchMode('camera'));
    
    // File upload handling
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag and drop handling
    dropArea.addEventListener('dragover', handleDragOver);
    dropArea.addEventListener('dragleave', handleDragLeave);
    dropArea.addEventListener('drop', handleDrop);
    
    // Camera controls
    startCameraBtn.addEventListener('click', startCamera);
    stopCameraBtn.addEventListener('click', stopCamera);
    captureBtn.addEventListener('click', captureImage);
    
    // Form submission
    uploadForm.addEventListener('submit', handleFormSubmit);
    
    // Other controls
    newClassificationBtn.addEventListener('click', resetClassification);
}

// Switch between upload and camera modes
function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'upload') {
        uploadModeBtn.classList.add('active');
        cameraModeBtn.classList.remove('active');
        uploadSection.style.display = 'block';
        cameraSection.style.display = 'none';
        stopCamera();
    } else {
        uploadModeBtn.classList.remove('active');
        cameraModeBtn.classList.add('active');
        uploadSection.style.display = 'none';
        cameraSection.style.display = 'block';
    }
    
    resultSection.style.display = 'none';
}

// Initialize event listeners
uploadModeBtn.addEventListener('click', () => switchMode('upload'));
cameraModeBtn.addEventListener('click', () => switchMode('camera'));

// Initialize to upload mode by default
switchMode('upload');

// Handle file selection
function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length) {
        handleFiles(files);
    }
}

// Handle dropped files
function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove('highlight');
    
    const files = e.dataTransfer.files;
    if (files.length) {
        handleFiles(files);
    }
}

// Process selected files
function handleFiles(files) {
    const file = files[0];
    if (!file.type.match('image.*')) {
        alert('Please select an image file.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (fileInput.files.length === 0) {
        alert('Please select an image first');
        return;
    }
    
    showLoading(true);
    
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
    formData.append('csrfmiddlewaretoken', document.querySelector('[name=csrfmiddlewaretoken]').value);
    
    fetch('/', {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`HTTP ${response.status}: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        if (data.error) throw new Error(data.error);
        
        displayResult(
            URL.createObjectURL(fileInput.files[0]), 
            data.class,
            data.confidence,
            wasteInfo[data.class] || { 
                description: "No info available", 
                impact: "N/A", 
                harmfulness: 50 
            }
        );
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Classification failed: ' + error.message);
    })
    .finally(() => {
        showLoading(false);   // ✅ Ensure loading overlay hides
    });
}

// Camera functions
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        cameraFeed.srcObject = stream;
        startCameraBtn.disabled = true;
        stopCameraBtn.disabled = false;
        captureBtn.disabled = false;
    } catch (err) {
        console.error('Error accessing camera:', err);
        alert('Could not access the camera. Please ensure you have granted camera permissions.');
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        cameraFeed.srcObject = null;
        stream = null;
    }
    startCameraBtn.disabled = false;
    stopCameraBtn.disabled = true;
    captureBtn.disabled = true;
}

function captureImage() {
    if (!stream) return;
    
    // Set canvas dimensions to match video feed
    cameraCanvas.width = cameraFeed.videoWidth;
    cameraCanvas.height = cameraFeed.videoHeight;
    
    // Draw current frame from video to canvas
    const ctx = cameraCanvas.getContext('2d');
    ctx.drawImage(cameraFeed, 0, 0, cameraCanvas.width, cameraCanvas.height);
    
    // Convert canvas to image and classify
    cameraCanvas.toBlob(blob => {
        const formData = new FormData();
        formData.append('image', blob, 'capture.jpg');
        formData.append('csrfmiddlewaretoken', document.querySelector('[name=csrfmiddlewaretoken]').value);
        
        showLoading(true);
        
        fetch('/', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error || 'Network response was not ok');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.error) throw new Error(data.error);
            displayResult(
                previewImage.src, // or cameraCanvas.toDataURL() for camera
                data.class, 
                data.confidence,
                data.waste_info
            );
        })
        .catch(error => {
            console.error('Full error:', error);
            alert('Classification failed: ' + (error.message || 'Unknown error'));
        })
        .finally(() => {
            showLoading(false);
        });
    }, 'image/jpeg', 0.95);
}

// Display classification results
function displayResult(imageSrc, material, confidence, wasteInfo) {
    // Safely handle potentially null elements
    const resultImage = document.getElementById('resultImage');
    const materialName = document.getElementById('materialName');
    const materialDescription = document.getElementById('materialDescription');
    const materialImpact = document.getElementById('materialImpact');
    const harmLevel = document.getElementById('harmLevel');
    const harmPercentage = document.getElementById('harmPercentage');
    const disposalRecommendation = document.getElementById('disposalRecommendation');
    
    if (resultImage) resultImage.src = imageSrc;
    if (materialName) materialName.textContent = material;
    if (materialDescription) materialDescription.textContent = wasteInfo.description;
    if (materialImpact) materialImpact.textContent = wasteInfo.impact;
    
    // Set harmfulness meter
    const harmfulness = wasteInfo.harmfulness || 50;
    if (harmLevel) harmLevel.style.width = `${harmfulness}%`;
    if (harmPercentage) harmPercentage.textContent = `${harmfulness}%`;
    
    // Set disposal recommendation
    if (disposalRecommendation) {
        if (harmfulness >= 80) {
            disposalRecommendation.textContent = "Hazardous material. Handle with care.";
        } else if (harmfulness >= 60) {
            disposalRecommendation.textContent = "Potentially harmful. Check local guidelines.";
        } else {
            disposalRecommendation.textContent = "Generally safe. Recycle when possible.";
        }
    }
    
    // Show results
    const resultSection = document.getElementById('resultSection');
    if (resultSection) resultSection.style.display = 'block';
    if (currentMode === 'upload') {
        const uploadSection = document.getElementById('uploadSection');
        if (uploadSection) uploadSection.style.display = 'none';
    } else {
        const cameraSection = document.getElementById('cameraSection');
        if (cameraSection) cameraSection.style.display = 'none';
    }
}

// Reset the classification interface
function resetClassification() {
    // Reset upload section
    previewImage.src = '#';
    previewImage.style.display = 'none';
    fileInput.value = '';
    
    // Reset camera section
    stopCamera();
    
    // Hide result section and show appropriate input section
    resultSection.style.display = 'none';
    if (currentMode === 'upload') {
        uploadSection.style.display = 'block';
    } else {
        cameraSection.style.display = 'block';
    }
}

// Show/hide loading overlay
function showLoading(show) {
    loadingOverlay.style.display = show ? 'flex' : 'none';
}

// Drag and drop helpers
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.add('highlight');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove('highlight');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);