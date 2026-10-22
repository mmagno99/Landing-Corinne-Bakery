import { IconArrowUpRight, IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { flavors, portions } from '../data/configurator';

interface Props {
  imageSrc: string;
  imageSrcSet: string;
  imageAlt: string;
}

export default function CakeConfigurator({
  imageSrc,
  imageSrcSet,
  imageAlt,
}: Props) {
  const [portion, setPortion] = useState<number>(6);
  const [flavorId, setFlavorId] = useState<string>('vainilla');
  const [hydrated, setHydrated] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const continueButton = useRef<HTMLButtonElement>(null);
  const flavor = flavors.find((item) => item.id === flavorId) ?? flavors[0];
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (!dialogOpen || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      continueButton.current?.focus({ preventScroll: true });
    };
  }, [dialogOpen]);
  function closeDialog() {
    setDialogOpen(false);
  }
  function keepFocusInDialog(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>(
      'button:not(:disabled)',
    );
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  return (
    <div className="configurator-grid">
      <figure className="configurator-visual">
        <div className="image-frame configurator-image">
          <img
            src={imageSrc}
            srcSet={imageSrcSet}
            sizes="(min-width: 768px) 45vw, 90vw"
            width="900"
            height="1125"
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          La inspiración es el comienzo. Los detalles son tuyos.
        </figcaption>
      </figure>
      <div className="configurator-content">
        <p className="eyebrow">Pasteles personalizados</p>
        <h2 id="personalizados-heading">
          A tu gusto.
          <br />
          <span className="heading-italic">A tu manera.</span>
        </h2>
        <p className="section-description">
          Cada celebración es distinta. Empieza a imaginar el pastel que va
          contigo.
        </p>
        <fieldset disabled={!hydrated}>
          <legend>¿Para cuántas personas?</legend>
          <div className="portion-options">
            {portions.map((value) => (
              <label
                className={`portion-option ${portion === value ? 'is-selected' : ''}`}
                key={value}
              >
                <input
                  type="radio"
                  name="portions"
                  value={value}
                  checked={portion === value}
                  onChange={() => setPortion(value)}
                />
                <span>{value}</span>
                <span className="sr-only"> personas</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset disabled={!hydrated}>
          <legend>Elige tu sabor</legend>
          <div className="flavor-options">
            {flavors.map((item) => (
              <label
                className={`flavor-option ${flavorId === item.id ? 'is-selected' : ''}`}
                key={item.id}
              >
                <input
                  type="radio"
                  name="flavor"
                  value={item.id}
                  checked={flavorId === item.id}
                  onChange={() => setFlavorId(item.id)}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div
          className="selection-summary"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="summary-label">Tu pastel, hasta ahora</span>
          <p key={`${portion}-${flavorId}`} className="summary-value">
            {portion} personas <span aria-hidden="true">/</span> {flavor.label}
          </p>
        </div>
        <button
          ref={continueButton}
          className="button configurator-continue"
          disabled={!hydrated}
          onClick={() => setDialogOpen(true)}
        >
          Continuar personalizando{' '}
          <IconArrowUpRight size={18} stroke={1.5} aria-hidden="true" />
        </button>
        <p className="form-note">
          Una primera idea. Diseño, fecha y cotización por confirmar.
        </p>
        <noscript>
          <p className="form-note">
            Activa JavaScript para probar las opciones de tu pastel.
          </p>
        </noscript>
      </div>
      <dialog
        ref={dialog}
        className="selection-dialog"
        aria-labelledby="selection-title"
        aria-describedby="selection-description"
        onCancel={closeDialog}
        onClose={closeDialog}
        onKeyDown={keepFocusInDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="dialog-inner">
          <button
            type="button"
            className="dialog-close"
            aria-label="Cerrar resumen"
            onClick={closeDialog}
          >
            <IconX size={20} stroke={1.5} aria-hidden="true" />
          </button>
          <p className="eyebrow">Una idea para celebrar</p>
          <h2 id="selection-title">Tu pastel empieza aquí.</h2>
          <dl className="dialog-summary">
            <div>
              <dt>Porciones</dt>
              <dd>{portion} personas</dd>
            </div>
            <div>
              <dt>Sabor</dt>
              <dd>{flavor.label}</dd>
            </div>
          </dl>
          <p id="selection-description">
            La personalización del diseño y la fecha estará disponible
            próximamente. Por ahora, puedes explorar tamaños y sabores sin
            realizar un pedido.
          </p>
          <button className="button" type="button" onClick={closeDialog}>
            Seguir imaginando{' '}
            <IconArrowUpRight size={18} stroke={1.5} aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </div>
  );
}
