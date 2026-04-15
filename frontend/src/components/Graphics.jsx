import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Animated aluminium profile cross-section SVG */
export function AluminiumProfileGraphic({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Outer frame */}
      <motion.rect
        x="20" y="20" width="160" height="160" rx="2"
        fill="none" stroke="#D4AF37" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Inner frame */}
      <motion.rect
        x="40" y="40" width="120" height="120" rx="1"
        fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />
      {/* Cross bars */}
      <motion.line
        x1="20" y1="100" x2="180" y2="100"
        stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.line
        x1="100" y1="20" x2="100" y2="180"
        stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      {/* Corner accents */}
      {[[20, 20], [160, 20], [20, 160], [160, 160]].map(([cx, cy], i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r="4"
          fill="#D4AF37" fillOpacity="0.6"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
        />
      ))}
      {/* Diagonal accent */}
      <motion.line
        x1="40" y1="40" x2="160" y2="160"
        stroke="#D4AF37" strokeWidth="0.3" strokeOpacity="0.2" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 2, delay: 1.2 }}
      />
    </motion.svg>
  );
}

/* Animated window frame graphic */
export function WindowFrameGraphic({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 300 400"
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Outer window frame */}
      <motion.rect
        x="10" y="10" width="280" height="380" rx="3"
        fill="none" stroke="#D4AF37" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      {/* Horizontal divider */}
      <motion.line
        x1="10" y1="200" x2="290" y2="200"
        stroke="#D4AF37" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      {/* Vertical divider */}
      <motion.line
        x1="150" y1="10" x2="150" y2="390"
        stroke="#D4AF37" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      {/* Glass pane fills */}
      {[
        { x: 14, y: 14, w: 132, h: 182 },
        { x: 154, y: 14, w: 132, h: 182 },
        { x: 14, y: 204, w: 132, h: 182 },
        { x: 154, y: 204, w: 132, h: 182 },
      ].map((pane, i) => (
        <motion.rect
          key={i}
          x={pane.x} y={pane.y} width={pane.w} height={pane.h}
          fill="#D4AF37" fillOpacity="0"
          initial={{ fillOpacity: 0 }}
          animate={inView ? { fillOpacity: 0.03 } : {}}
          transition={{ delay: 2 + i * 0.2, duration: 0.8 }}
        />
      ))}
      {/* Handle */}
      <motion.rect
        x="138" y="190" width="24" height="4" rx="2"
        fill="#D4AF37" fillOpacity="0.6"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 2.5, duration: 0.5 }}
      />
    </motion.svg>
  );
}

/* Geometric diamond pattern for section backgrounds */
export function DiamondPattern({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 400"
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 0.04 } : {}}
      transition={{ duration: 2 }}
    >
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => {
          const cx = 40 + col * 80;
          const cy = 40 + row * 80;
          return (
            <motion.g key={`${row}-${col}`}>
              <motion.rect
                x={cx - 15} y={cy - 15} width={30} height={30}
                fill="none" stroke="#D4AF37" strokeWidth="0.5"
                transform={`rotate(45 ${cx} ${cy})`}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: (row + col) * 0.08, duration: 0.5 }}
              />
            </motion.g>
          );
        })
      )}
    </motion.svg>
  );
}

/* Animated measurement lines graphic */
export function MeasurementGraphic({ className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 100"
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Horizontal measurement */}
      <motion.line
        x1="10" y1="50" x2="190" y2="50"
        stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      {/* End caps */}
      <motion.line x1="10" y1="40" x2="10" y2="60" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5"
        initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 0.3 }} />
      <motion.line x1="190" y1="40" x2="190" y2="60" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5"
        initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 0.3 }} />
      {/* Tick marks */}
      {[40, 70, 100, 130, 160].map((x, i) => (
        <motion.line
          key={i} x1={x} y1="45" x2={x} y2="55"
          stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
        />
      ))}
      {/* Label */}
      <motion.text
        x="100" y="80" textAnchor="middle"
        fill="#D4AF37" fillOpacity="0.4" fontSize="8"
        fontFamily="Oswald" letterSpacing="0.2em"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        PRECISION ENGINEERED
      </motion.text>
    </motion.svg>
  );
}
