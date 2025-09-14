import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const AnimatedNetworkBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Initialize nodes
    const initialNodes: Node[] = [];
    for (let i = 0; i < 25; i++) {
      initialNodes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    setNodes(initialNodes);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate connections between nodes
  const getConnections = () => {
    const connections = [];
    const maxDistance = 200;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          connections.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            opacity: 1 - distance / maxDistance,
          });
        }
      }
    }
    return connections;
  };

  const connections = getConnections();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Network Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity={connection.opacity * 0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
        
        {/* Flowing particles along connections */}
        {connections.slice(0, 10).map((connection, index) => (
          <motion.circle
            key={`particle-${index}`}
            r="2"
            fill="hsl(var(--accent))"
            initial={{
              cx: connection.x1,
              cy: connection.y1,
            }}
            animate={{
              cx: [connection.x1, connection.x2, connection.x1],
              cy: [connection.y1, connection.y2, connection.y1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Network Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 bg-primary rounded-full shadow-lg"
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            x: [0, node.vx * 100, 0],
            y: [0, node.vy * 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          {/* Node pulse effect */}
          <motion.div
            className="absolute inset-0 bg-primary rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
          />
        </motion.div>
      ))}

      {/* Floating Data Packets */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 bg-accent/60 rounded-sm"
          animate={{
            x: [0, dimensions.width + 50],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height + 20,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
          style={{
            left: -50,
            top: Math.random() * dimensions.height,
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedNetworkBackground;