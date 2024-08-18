


//original k baad wala 



import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cardData from './cardData';
import './EditingScreen.css';
import jsPDF from 'jspdf';



const EditingScreen = () => {
  const { cardId } = useParams();
  const selectedCard = cardData.find(card => card.id === String(cardId));
  const [selectedPage, setSelectedPage] = useState(0);
  const [pagesData, setPagesData] = useState(
    selectedCard.thumbnails.map(() => ({ texts: [], images: [] }))
  );

  const canvasRef = useRef(null);
  const imageInputRef=useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentText, setCurrentText] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [editPosition, setEditPosition] = useState({ x: 0, y: 0 });
  const [selectedFont, setSelectedFont] = useState('Roboto');
  const [selectedFontSize, setSelectedFontSize] = useState(20);
  const [selectedColor, setSelectedColor] = useState('black');
  const [isTextEditorVisible, setIsTextEditorVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
const [isImageDragging, setIsImageDragging] = useState(false);
const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
const [isResizing, setIsResizing] = useState(false);
const [isCropping, setIsCropping] = useState(false);
const [cropStart, setCropStart] = useState(null);
const [cropEnd, setCropEnd] = useState(null);

  const [fontStyle, setFontStyle] = useState({
    bold: false,
    italic: false,
    underline: false
  });

  const [fontDropdownVisible, setFontDropdownVisible] = useState(false);
  const [fontSizeDropdownVisible, setFontSizeDropdownVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const[clientPhoneNumber,setClientPhoneNumber]=useState('');

  const fontDropdownRef = useRef(null);
  const fontSizeDropdownRef = useRef(null);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    drawCanvas();
  }, [pagesData, selectedPage, selectedColor]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = selectedCard.thumbnails[selectedPage];
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      pagesData[selectedPage].texts.forEach(text => {
        const fontStyle = text.fontStyle === 'italic' ? 'italic' : 'normal';
      const fontWeight = text.fontWeight === 'bold' ? 'bold' : 'normal';
      ctx.font = `${fontStyle} ${fontWeight} ${text.fontSize || selectedFontSize}px ${text.font || selectedFont}`;
        ctx.fillStyle = text.color || selectedColor;
        ctx.fillText(text.content, text.x, text.y);
        if (text.textDecoration === 'underline') {
          const textWidth = ctx.measureText(text.content).width;
          const textHeight = text.fontSize || selectedFontSize;
          ctx.beginPath();
          ctx.moveTo(text.x, text.y + 2); // Adjust underline position
          ctx.lineTo(text.x + textWidth, text.y + 2);
          ctx.strokeStyle = text.color || selectedColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const textWidth = ctx.measureText(text.content).width;
        const textHeight = text.fontSize || selectedFontSize;
        ctx.strokeStyle = 'transparent';
        ctx.lineWidth = 2;
        ctx.strokeRect(text.x - 5, text.y - textHeight, textWidth + 10, textHeight + 5);
      });

      pagesData[selectedPage].images.forEach(imageData => {
        const img = new Image();
        img.src = imageData.src;
        img.onload = () => {
          ctx.drawImage(img, imageData.x, imageData.y, imageData.width, imageData.height);
          if(imageData.selected){
            const handleSize=10;
            ctx.fillStyle='blue';
            // ctx.fillRect(imageData.x - handleSize / 2, imageData.y - handleSize / 2, handleSize, handleSize);
            // ctx.fillRect(imageData.x + imageData.width - handleSize / 2, imageData.y - handleSize / 2, handleSize, handleSize);
            // ctx.fillRect(imageData.x - handleSize / 2, imageData.y + imageData.height - handleSize / 2, handleSize, handleSize);
            // ctx.fillRect(imageData.x + imageData.width - handleSize / 2, imageData.y + imageData.height - handleSize / 2, handleSize, handleSize);
            ctx.fillRect(imageData.x - 5, imageData.y - 5, 10, 10);
            ctx.fillRect(imageData.x + imageData.width - 5, imageData.y - 5, 10, 10);
            ctx.fillRect(imageData.x - 5, imageData.y + imageData.height - 5, 10, 10);
            ctx.fillRect(imageData.x + imageData.width - 5, imageData.y + imageData.height - 5, 10, 10);
          }
        };
      });
    };
  };

  const handleAddText = () => {
    const newPagesData = [...pagesData];
    newPagesData[selectedPage].texts.push({
      id: Date.now(),
      content: 'Edit me',
      x: 50,
      y: 50,
      font: selectedFont,
      fontSize: selectedFontSize,
      color: selectedColor,
      fontWeight: fontStyle.bold ? 'bold' : 'normal',
      fontStyle: fontStyle.italic ? 'italic' : 'normal',
      textDecoration: fontStyle.underline ? 'underline' : 'none'
    });
    setPagesData(newPagesData);
    setIsTextEditorVisible(true);
  };
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const newImage = new Image();
      newImage.src = event.target.result;
  
      newImage.onload = () => {
        const newPagesData = [...pagesData];
        newPagesData[selectedPage].images.push({
          id: Date.now(),
          src: newImage.src,
          x: 50,
          y: 50,
          width: 150,
          height: 150,
          selected:false,
          resizingHandle:null,
        });
        setPagesData(newPagesData);
      };
    };
  
    reader.readAsDataURL(file);
  };
  
  

  const handleSave = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvasRef.current.width, canvasRef.current.height]
    });

    const loadPage = (index) => {
      return new Promise((resolve) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = selectedCard.thumbnails[index];
        image.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          pagesData[index].texts.forEach(text => {
            ctx.font = `${text.fontSize || selectedFontSize}px ${text.font || selectedFont}`;
            ctx.fillStyle = text.color || selectedColor;
            ctx.fillText(text.content, text.x, text.y);
          });

          pagesData[index].images.forEach(imageData => {
            const img = new Image();
            img.src = imageData.src;
            img.onload = () => {
              ctx.drawImage(img, imageData.x, imageData.y, 150, 150);
            };
          });

          resolve(canvas.toDataURL('image/png'));
        };
      });
    };

    const generatePDF = async () => {
      for (let i = 0; i < pagesData.length; i++) {
        const imgData = await loadPage(i);
        if (i === 0) {
          pdf.addImage(imgData, 'PNG', 0, 0, canvasRef.current.width, canvasRef.current.height);
        } else {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
      pdf.save(`card_${selectedCard.title}.pdf`);
      // return pdf.output('arraybuffer');
    };
    generatePDF();

   
  };

  const getTextAtPosition = (x, y) => {
    for (let text of pagesData[selectedPage].texts) {
      const textWidth = canvasRef.current.getContext('2d').measureText(text.content).width;
      const textHeight = text.fontSize || selectedFontSize;
      if (x >= text.x && x <= text.x + textWidth && y <= text.y && y >= text.y - textHeight) {
        return text;
      }
    }
    return null;
  };

  const handleMouseDown = (e) => {
    if (isEditing) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const image = getImageAtPosition(x, y);
    // if (image) {
    //   if (isOnResizeHandle(x, y, image)) {
    //     setIsResizing(true);
    //     // setIsImageDragging(true);
    //     setCurrentImage(image);
    //     // setImageOffset({ x: x - image.x, y: y - image.y });
    // // image.selected = true;
    //   } else {
    //     setIsImageDragging(true);
    //     setCurrentImage(image);
    //     setImageOffset({ x: x - image.x, y: y - image.y });
    //   }
    // }

    const text = getTextAtPosition(x, y);
    if (text) {
      setIsDragging(true);
      setCurrentText(text);
      setOffset({ x: x - text.x, y: y - text.y });
      setEditPosition({ x: text.x, y: text.y });
      setEditContent(text.content);
      setSelectedFont(text.font || 'Roboto');
      setSelectedFontSize(text.fontSize || 20);
      setSelectedColor(text.color || 'black'); 
      setFontStyle({
        bold: text.fontWeight === 'bold',
        italic: text.fontStyle === 'italic',
        underline: text.textDecoration === 'underline'
      });
    }
    else if(image)
    { if (isOnResizeHandle(x, y, image)) {
      setIsResizing(true);
      setCurrentImage(image);  
    } 
    else{

      setIsImageDragging(true);
      setCurrentImage(image);
      setImageOffset({ x: x - image.x, y: y - image.y });
      if (x >= image.x - 5 && x <= image.x + 5 && y >= image.y - 5 && y <= image.y + 5) {
        image.resizingHandle = 'top-left';
      } else if (x >= image.x + image.width - 5 && x <= image.x + image.width + 5 && y >= image.y - 5 && y <= image.y + 5) {
        image.resizingHandle = 'top-right';
      } else if (x >= image.x - 5 && x <= image.x + 5 && y >= image.y + image.height - 5 && y <= image.y + image.height + 5) {
        image.resizingHandle = 'bottom-left';
      } else if (x >= image.x + image.width - 5 && x <= image.x + image.width + 5 && y >= image.y + image.height - 5 && y <= image.y + image.height + 5) {
        image.resizingHandle = 'bottom-right';
      } else {
        image.resizingHandle = null;
      }
    }
    }
  };
  const isOnResizeHandle = (x, y, image) => {
    const handleSize = 10;
    return (
      (x >= image.x - handleSize / 2 && x <= image.x + handleSize / 2 && y >= image.y - handleSize / 2 && y <= image.y + handleSize / 2) ||
      (x >= image.x + image.width - handleSize / 2 && x <= image.x + image.width + handleSize / 2 && y >= image.y - handleSize / 2 && y <= image.y + handleSize / 2) ||
      (x >= image.x - handleSize / 2 && x <= image.x + handleSize / 2 && y >= image.y + image.height - handleSize / 2 && y <= image.y + image.height + handleSize / 2) ||
      (x >= image.x + image.width - handleSize / 2 && x <= image.x + image.width + handleSize / 2 && y >= image.y + image.height - handleSize / 2 && y <= image.y + image.height + handleSize / 2)
    );
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !currentText || isEditing && !isImageDragging && !isResizing) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging && currentText) {
      const newPagesData = [...pagesData];
      const textIndex = newPagesData[selectedPage].texts.findIndex(t => t.id === currentText.id);
      newPagesData[selectedPage].texts[textIndex] = { ...currentText, x: x - offset.x, y: y - offset.y };
      setPagesData(newPagesData);
    } else if (isImageDragging && currentImage) {
      const newPagesData = [...pagesData];
      const imageIndex = newPagesData[selectedPage].images.findIndex(img => img.id === currentImage.id);
      // newPagesData[selectedPage].images[imageIndex] = { ...currentImage, x: x - imageOffset.x, y: y - imageOffset.y };
      // setPagesData(newPagesData);
      if (currentImage.resizingHandle === 'top-left') {
        newPagesData[selectedPage].images[imageIndex].width += currentImage.x - x;
        newPagesData[selectedPage].images[imageIndex].height += currentImage.y - y;
        newPagesData[selectedPage].images[imageIndex].x = x;
        newPagesData[selectedPage].images[imageIndex].y = y;
      } else if (currentImage.resizingHandle === 'top-right') {
        newPagesData[selectedPage].images[imageIndex].width = x - currentImage.x;
        newPagesData[selectedPage].images[imageIndex].height += currentImage.y - y;
        newPagesData[selectedPage].images[imageIndex].y = y;
      } else if (currentImage.resizingHandle === 'bottom-left') {
        newPagesData[selectedPage].images[imageIndex].width += currentImage.x - x;
        newPagesData[selectedPage].images[imageIndex].height = y - currentImage.y;
        newPagesData[selectedPage].images[imageIndex].x = x;
      } else if (currentImage.resizingHandle === 'bottom-right') {
        newPagesData[selectedPage].images[imageIndex].width = x - currentImage.x;
        newPagesData[selectedPage].images[imageIndex].height = y - currentImage.y;
      }
      setPagesData(newPagesData);
    } else {
      const newPagesData = [...pagesData];
      const imageIndex = newPagesData[selectedPage].images.findIndex(img => img.id === currentImage.id);
      newPagesData[selectedPage].images[imageIndex] = { ...currentImage, x: x - imageOffset.x, y: y - imageOffset.y };
      setPagesData(newPagesData);
    
    }
  //   else if(isResizing && currentImage){
  //     const newWidth=Math.max(10,x-currentImage.x);
  //     const newHeight=Math.max(10,y-currentImage.y);
  //     const newPagesData=[...pagesData];
  //     const imageIndex=newPagesData[selectedPage].images.findIndex(img => img.id === currentImage.id);
  //     newPagesData[selectedPage].images[imageIndex] = { 
  //       ...currentImage, 
  //       width: newWidth, 
  //       height: newHeight 
  //     };
  //     setPagesData(newPagesData);
  //   }
  // };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsImageDragging(false);
    setIsResizing(false);
  };

  const handleDoubleClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const text = getTextAtPosition(x, y);
    if (text) {
      setIsEditing(true);
      setEditContent(text.content);
      setEditPosition({ x: text.x, y: text.y });
      setSelectedFont(text.font || 'Roboto');
      setSelectedFontSize(text.fontSize || 20);
      setSelectedColor(text.color || 'black'); 
      setFontStyle({
        bold: text.fontWeight === 'bold',
        italic: text.fontStyle === 'italic',
        underline: text.textDecoration === 'underline'
      });
    }
  };
  const getImageAtPosition = (x, y) => {
    for (let image of pagesData[selectedPage].images) {
      if (x >= image.x && x <= image.x + image.width && y >= image.y && y <= image.y + image.height) {
        return image;
      }
    }
    return null;
  };
  

  const handleEditChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleEditSave = () => {
    if (currentText) {
      const newPagesData = [...pagesData];
      const textIndex = newPagesData[selectedPage].texts.findIndex(t => t.id === currentText.id);
      newPagesData[selectedPage].texts[textIndex] = { 
        ...currentText, 
        content: editContent, 
        font: selectedFont, 
        fontSize: selectedFontSize, 
        color: selectedColor,
        fontWeight: fontStyle.bold ? 'bold' : 'normal',
        fontStyle: fontStyle.italic ? 'italic' : 'normal',
        textDecoration: fontStyle.underline ? 'underline' : 'none'
      };
      setPagesData(newPagesData);
    }
    setIsEditing(false);
    setCurrentText(null);
  };
  const handleDeleteText = () => {
    if (currentText) {
      const newPagesData = [...pagesData];
      const textIndex = newPagesData[selectedPage].texts.findIndex(t => t.id === currentText.id);
      newPagesData[selectedPage].texts.splice(textIndex, 1);
      setPagesData(newPagesData);
      setIsEditing(false);
      setCurrentText(null);
    }
  };
  

  const handleFontStyleToggle = (style) => {
    setFontStyle(prev => ({ ...prev, [style]: !prev[style] }));
  };
  
  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
    setFontDropdownVisible(false);
  };

  const handleFontSizeChange = (e) => {
    setSelectedFontSize(parseInt(e.target.value, 10));
    setFontSizeDropdownVisible(false);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setColorPickerVisible(false);
  };

  const toggleFontDropdown = () => {
    setFontDropdownVisible(!fontDropdownVisible);
    setFontSizeDropdownVisible(false);
    setColorPickerVisible(false);
  };

  const toggleFontSizeDropdown = () => {
    setFontSizeDropdownVisible(!fontSizeDropdownVisible);
    setFontDropdownVisible(false);
    setColorPickerVisible(false);
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
    setFontDropdownVisible(false);
    setFontSizeDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fontDropdownRef.current && !fontDropdownRef.current.contains(e.target)) {
        setFontDropdownVisible(false);
      }
      if (fontSizeDropdownRef.current && !fontSizeDropdownRef.current.contains(e.target)) {
        setFontSizeDropdownVisible(false);
      }
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) {
        setColorPickerVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  const fontOptions = [
    'Roboto', 
    'Arial', 
    'Times New Roman', 
    'Open Sans', 
    'Lobster', 
    'Alex Brush', 
    'Allura', 
    'Dancing Script', 
    'Great Vibes', 
    'Monsieur La Doulaise', 
    'Parisienne', 
    'Petit Formal Script', 
    'Pinyon Script', 
    'Rochester', 
    'Sacramento'
  ];

  const colorOptions = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#C0C0C0', '#808080',
    '#800000', '#808000', '#008000', '#800080', '#008080',
    '#000080'
  ];

  return (
    <div className="editing-screen-container">
      <div className="sidebar">
        <h2>Thumbnails</h2>
        <div className="thumbnail-list">
          {selectedCard.thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={`thumbnail ${index === selectedPage ? 'selected' : ''}`}
              onClick={() => setSelectedPage(index)}
            >
              <img src={thumb} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <div className="toolbar">
          <button onClick={handleAddText}>Add Text</button>
          <button onClick={() => imageInputRef.current.click()}>Add Image</button>
          <input type="file" accept="image/*" onChange={handleAddImage} style={{ display: 'none' }} ref={imageInputRef}/>
          <button onClick={handleSave}>Save Image</button>
        </div>
        <div className="content-area">
          <div className="editor">
            <canvas
              ref={canvasRef}
              width={500}
              height={700}
              className="card-canvas"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onDoubleClick={handleDoubleClick}
            />
            {isEditing && (
              <div
                className="text-editor"
                style={{
                  left: editPosition.x,
                  top: editPosition.y - selectedFontSize,
                }}
              >
                <input
                  type="text"
                  value={editContent}
                  onChange={handleEditChange}
                  style={{ 
                    fontFamily: selectedFont, 
                    fontSize: selectedFontSize, 
                    color: selectedColor,
                    fontWeight: fontStyle.bold ? 'bold' : 'normal',
                    fontStyle: fontStyle.italic ? 'italic' : 'normal',
                    textDecoration: fontStyle.underline ? 'underline' : 'none'
                  }}
                />
                <button onClick={handleEditSave}>Save</button>
              </div>
            )}
          </div>
          {isTextEditorVisible &&(
          <div className="font-controls-card">
            <div className="font-controls">
              <div className="font-dropdown">
                <button onClick={toggleFontDropdown}>Font: {selectedFont}</button>
                {fontDropdownVisible && (
                  <div className="font-dropdown-menu" ref={fontDropdownRef}>
                    {fontOptions.map((font) => (
                      <button
                        key={font}
                        onClick={() => handleFontChange({ target: { value: font } })}
                        style={{ fontFamily: font }}
                      >
                        {font}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="font-size-dropdown">
                <button onClick={toggleFontSizeDropdown}>Size: {selectedFontSize}px</button>
                {fontSizeDropdownVisible && (
                  <div className="font-size-dropdown-menu" ref={fontSizeDropdownRef}>
                    <button onClick={() => handleFontSizeChange({ target: { value: '12' } })}>12px</button>
                    <button onClick={() => handleFontSizeChange({ target: { value: '16' } })}>16px</button>
                    <button onClick={() => handleFontSizeChange({ target: { value: '20' } })}>20px</button>
                    <button onClick={() => handleFontSizeChange({ target: { value: '24' } })}>24px</button>
                    <button onClick={() => handleFontSizeChange({ target: { value: '28' } })}>28px</button>
                    <button onClick={() => handleFontSizeChange({ target: { value: '32' } })}>32px</button>
                  </div>
                )}
              </div>
              <div className="color-picker">
                <button onClick={toggleColorPicker} className='color-button'>Color: {selectedColor}</button>
                {colorPickerVisible && (
                  <div className="color-picker-menu" ref={colorPickerRef}>
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        style={{ backgroundColor: color }}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="font-style-controls">
                <button onClick={() => setFontStyle(prev => ({ ...prev, bold: !prev.bold }))}>
                  <strong>B</strong>
                </button>
                <button onClick={() => setFontStyle(prev => ({ ...prev, italic: !prev.italic }))}>
                  <em>I</em>
                </button>
                <button onClick={() => setFontStyle(prev => ({ ...prev, underline: !prev.underline }))}>
                  <u>U</u>
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditingScreen;



