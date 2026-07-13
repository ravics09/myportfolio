'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/section';
import {
  Calendar,
  Building2,
  Code2,
  Rocket,
  Download,
  Mail,
  Cloud,
  Database,
  BrainCircuit,
  Server,
  Hexagon,
  FileCode2,
  Atom,
  Triangle,
  Box,
  Container,
  Sparkles,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HeroSection = () => {
  return (
    <Section className="items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-16 py-2">
        <motion.div
          className="w-full lg:w-[60%] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[#5ceac9] text-sm uppercase tracking-widest font-bold">Hi, my name is</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Ravi Sharma
          </motion.h1>

          {/* Professional Title */}
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-slate-400 font-medium mb-6">
            Senior Full Stack Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl leading-relaxed"
          >
            Building scalable enterprise software powered by{' '}
            <span className="text-[#5ceac9] font-medium">cloud-native architecture</span> &{' '}
            <span className="text-[#5ceac9] font-medium">AI Applications</span>
          </motion.p>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            <p>
              Designing reliable, high-performance systems that combine modern engineering practices with practical AI
              solutions.
            </p>
          </motion.div>

          {/* Experience Statistics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-10">
            {[
              { icon: Calendar, num: '9+', label: 'Years\nExperience' },
              { icon: Building2, num: '5+', label: 'Companies\nWorked With' },
              { icon: Code2, num: '15+', label: 'Enterprise\nProjects' },
              { icon: Rocket, num: '2+', label: 'AI Products\nBuilt' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-start p-5 bg-[#0A1122] border border-slate-800 rounded-xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5ceac9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-[#5ceac9]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.num}</span>
                </div>
                <span className="text-xs md:text-sm text-slate-400 whitespace-pre-line">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="inline-flex items-center gap-3 bg-[#0A1122]/80 backdrop-blur-md border border-slate-800 rounded-full py-2 px-4 md:px-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate-300">
                Open to Senior Full Stack, Lead Engineer & AI Engineering roles
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ==========================================
            RIGHT COLUMN (40%) - ILLUSTRATION
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[40%] hidden lg:flex items-center justify-center relative min-h-[600px]"
        >
          {/* Dotted Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <svg className="w-[500px] h-[500px]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#5ceac9" strokeWidth="0.2" strokeDasharray="1 3" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#5ceac9" strokeWidth="0.2" strokeDasharray="1 3" />
            </svg>
          </div>

          {/* Isometric Center Stack */}
          <div
            className="relative w-64 h-64"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg) rotateZ(-45deg)',
            }}
          >
            {/* Base Layer */}
            <motion.div
              animate={{ translateZ: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#0A1122] border border-slate-700 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              style={{ transform: 'translateZ(0px)' }}
            />

            {/* Middle Layer */}
            <motion.div
              animate={{ translateZ: [40, 30, 40] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#0A1122] border border-slate-700 rounded-2xl"
              style={{ transform: 'translateZ(40px)' }}
            />

            {/* Top Glowing Layer */}
            <motion.div
              animate={{ translateZ: [80, 70, 80] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#0A1122]/80 backdrop-blur-md border-2 border-[#5ceac9]/50 rounded-2xl shadow-[0_0_40px_rgba(92,234,201,0.2)] flex items-center justify-center"
              style={{ transform: 'translateZ(80px)' }}
            >
              {/* Reverse rotate the icon so it faces forward */}
              <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg) scale(1.5)' }}>
                <Code2 className="w-12 h-12 text-[#5ceac9]" />
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            className="absolute top-[10%] left-[50%] -translate-x-1/2 glass-panel bg-[#0A1122] border border-slate-700 p-4 rounded-xl shadow-lg z-20"
          >
            <Cloud className="w-8 h-8 text-[#5ceac9]" />
          </motion.div>

          {/* Right Node (AI) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[40%] right-[10%] glass-panel bg-[#0A1122] border border-slate-700 p-4 rounded-xl shadow-lg z-20"
          >
            <BrainCircuit className="w-8 h-8 text-[#5ceac9]" />
          </motion.div>

          {/* Bottom Right Node (Database) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[20%] right-[25%] glass-panel bg-[#0A1122] border border-slate-700 p-4 rounded-xl shadow-lg z-20"
          >
            <Database className="w-8 h-8 text-[#5ceac9]" />
          </motion.div>

          {/* Bottom Left Node (Architecture) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-[20%] left-[25%] glass-panel bg-[#0A1122] border border-slate-700 p-4 rounded-xl shadow-lg z-20"
          >
            <Server className="w-8 h-8 text-[#5ceac9]" />
          </motion.div>

          {/* Left Node (Backend Code) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-[40%] left-[10%] glass-panel bg-[#0A1122] border border-slate-700 p-4 rounded-xl shadow-lg z-20"
          >
            <FileCode2 className="w-8 h-8 text-[#5ceac9]" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
