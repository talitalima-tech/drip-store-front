import React, { useMemo, useState } from 'react';
import { theme } from '../../styles/theme';
import leftIcon from '../../assets/icons/arrow-left.svg';
import rightIcon from '../../assets/icons/arrow-right.svg';

const toPx = (v) => {
  if (v == null) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

const Gallery = ({ className, width, height, radius = '0px', showThumbs, images = [] }) => {
  const [index, setIndex] = useState(0);
  const canPrev = index > 0;
  const canNext = index < Math.max(images.length - 1, 0);

  // No mobile, ignoramos a largura fixa e usamos 100%
  const containerStyle = {
    position: 'relative',
    width: '100%', // Força ocupar a largura disponível
    maxWidth: toPx(width) || '100%',
    aspectRatio: '4/3', // Mantém a proporção sem precisar de altura fixa
    borderRadius: radius,
    overflow: 'hidden',
    backgroundColor: theme.colors.neutral[200]
  };

  const trackStyle = useMemo(() => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    transform: `translateX(-${index * 100}%)`,
    transition: 'transform 300ms ease',
  }), [index]);

  const slideStyle = {
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // "contain" é melhor para tênis não serem cortados
    borderRadius: radius
  };

  const arrowBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '32px', // Reduzi um pouco para telas pequenas
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2
  };

  const thumbsBarStyle = {
    display: showThumbs ? 'flex' : 'none',
    gap: '10px',
    marginTop: '15px',
    overflowX: 'auto', // Permite scroll lateral nas thumbs se não couberem
    paddingBottom: '5px'
  };

  const thumbStyle = (active) => ({
    minWidth: '70px', // Thumbs menores para caberem em 363px
    height: '60px',
    flexShrink: 0,
    borderRadius: radius,
    border: active ? `2px solid ${theme.colors.primary.main || '#C92071'}` : '2px solid transparent',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const onPrev = () => canPrev && setIndex((i) => i - 1);
  const onNext = () => canNext && setIndex((i) => i + 1);

  return (
    <div className={className} style={{ width: '100%', maxWidth: toPx(width) }}>
      <div style={containerStyle}>
        <div style={trackStyle}>
          {images.map((img, i) => (
            <div key={i} style={slideStyle}>
              <img src={img?.src} alt={`gallery-${i}`} style={imgStyle} />
            </div>
          ))}
        </div>

        {/* Setas ocultas se só houver uma imagem ou se for tela muito pequena */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              style={{ ...arrowBase, left: '10px', display: canPrev ? 'flex' : 'none' }}
            >
              <img src={leftIcon} alt="Anterior" style={{ width: 16 }} />
            </button>

            <button
              onClick={onNext}
              style={{ ...arrowBase, right: '10px', display: canNext ? 'flex' : 'none' }}
            >
              <img src={rightIcon} alt="Próxima" style={{ width: 16 }} />
            </button>
          </>
        )}
      </div>

      <div style={thumbsBarStyle}>
        {images.map((img, i) => (
          <div key={`thumb-${i}`} onClick={() => setIndex(i)} style={thumbStyle(i === index)}>
            <img src={img?.src} alt={`thumb-${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;