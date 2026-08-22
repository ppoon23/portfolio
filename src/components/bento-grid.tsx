"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cpu, Database, Sparkles, Layers, MessageSquareText, Eye, Zap, GitBranch } from "lucide-react"

export function BentoGrid() {
  return (
    <section id="highlights" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full editorial-card text-[11px] font-mono uppercase tracking-wider text-(--accent-primary) mb-3 border border-(--card-border)">
            <Sparkles className="w-3.5 h-3.5 text-(--accent-warm)" />
            <span>01 / Technical Highlights &amp; Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading) font-sans">
            LLM, Vision <span className="font-editorial-serif italic font-normal text-(--text-ash)">&amp; ML Infrastructure</span>
          </h2>
          <p className="text-(--text-body) font-editorial-serif italic text-base sm:text-lg mt-2 max-w-xl mx-auto">
            Architecting generative RAG pipelines, foundation vision models (ViT/DINOv3), and high-throughput data engines.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Enterprise LLM & RAG Systems (Spans 2 columns) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 relative p-8 rounded-3xl editorial-card editorial-card-hover overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-(--text-heading) mb-3 group-hover:text-(--accent-primary) transition-colors">
                Production RAG &amp; Multimodal vLLM Pipelines
              </h3>
              <p className="text-(--text-body) text-sm leading-relaxed mb-6 font-sans">
                Engineered an enterprise Retrieval-Augmented Generation (RAG) system converting <strong>10,000+ structured XML/HTML documents</strong> into vector embeddings, utilizing <strong>Google Gemini (Vertex AI)</strong> for high-accuracy grounded responses. Developed automated feature extraction pipelines for <strong>100+ multimodal PDFs</strong> (text &amp; graphs) using vLLMs and <strong>Milvus Vector DB</strong>.
              </p>
            </div>

            {/* Visual Metric & Architecture Representation */}
            <div className="bg-(--pill-bg) border border-(--card-border) rounded-2xl p-5 font-sans relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-(--text-muted) border-b border-(--card-border) pb-2.5 mb-3">
                <span className="flex items-center gap-1.5 text-(--text-heading) font-semibold">
                  <Database className="w-3.5 h-3.5 text-(--accent-warm)" /> Vector Database &amp; LLM Architecture
                </span>
                <span className="text-(--accent-primary) font-bold">Milvus + Vertex AI</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <div className="bg-(--card-bg) p-3 rounded-xl border border-(--card-border) shadow-2xs">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Corpus</div>
                  <div className="text-(--text-heading) font-bold text-sm mt-0.5">10,000+ Docs</div>
                  <div className="text-[10px] text-(--accent-clay) font-mono mt-1">XML / HTML Embeddings</div>
                </div>

                <div className="bg-(--card-bg) p-3 rounded-xl border border-(--card-border) shadow-2xs">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Multimodal</div>
                  <div className="text-(--text-heading) font-bold text-sm mt-0.5">100+ Complex PDFs</div>
                  <div className="text-[10px] text-(--text-muted) font-mono mt-1">vLLM Graph &amp; Text</div>
                </div>

                <div className="bg-(--card-bg) p-3 rounded-xl border border-(--card-border) shadow-2xs">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">GenAI Engine</div>
                  <div className="text-(--text-heading) font-bold text-sm mt-0.5">Gemini Vertex AI</div>
                  <div className="text-[10px] text-(--accent-primary) font-mono mt-1">Sub-second Latency</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: ViT & DINOv3 5M Embeddings (1 column) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="relative p-8 rounded-3xl editorial-card editorial-card-hover overflow-hidden group flex flex-col justify-between"
          >
            <div>
              {/* <div className="p-3 rounded-2xl bg-(--pill-bg) text-(--text-heading) border border-(--card-border) w-max mb-6">
                <Eye className="w-5 h-5 text-(--accent-primary)" />
              </div> */}
              <h3 className="text-xl font-bold text-(--text-heading) mb-2 group-hover:text-(--accent-primary) transition-colors">
                Image Embeddings Analysis
              </h3>
              <p className="text-(--text-body) text-sm leading-relaxed mb-4">
                Leveraged Vision Transformers (ViT) and DINOv3 foundation models to generate and index <strong>5M+ image embeddings</strong>, identifying data clusters linked to weak model performance and correcting train/test splits.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-(--pill-bg) border border-(--card-border) flex items-center justify-around text-center">
              <div>
                <div className="text-2xl font-black text-(--text-heading) font-sans">5M+</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Embeddings</div>
              </div>
              <div className="w-px h-8 bg-(--card-border)" />
              <div>
                <div className="text-2xl font-black text-(--accent-clay) font-sans">DINOv3</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Clustering</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Pose & Object Detection Active Learning (1 column) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="relative p-8 rounded-3xl editorial-card editorial-card-hover overflow-hidden group flex flex-col justify-between"
          >
            <div>
              {/* <div className="p-3 rounded-2xl bg-(--pill-bg) text-(--text-heading) border border-(--card-border) w-max mb-6">
                <Zap className="w-5 h-5 text-(--accent-warm)" />
              </div> */}
              <h3 className="text-xl font-bold text-(--text-heading) mb-2 group-hover:text-(--accent-primary) transition-colors">
                YOLO-NAS Pose &amp; Active Learning
              </h3>
              <p className="text-(--text-body) text-sm leading-relaxed mb-4">
                Reduced YOLO-NAS Pose training time by <strong>25%</strong> and boosted pose estimation accuracy from <strong>95% to 97%</strong>. Built active learning loops benchmarking label quality between YOLO and DETR models.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-(--card-border) text-xs">
              <div className="flex items-center justify-between text-(--text-body)">
                <span className="flex items-center gap-1.5 text-(--text-muted)">
                  <GitBranch className="w-3.5 h-3.5 text-(--accent-primary)" /> Pose Accuracy
                </span>
                <span className="font-mono text-[11px] font-bold text-(--accent-primary)">95% &rarr; 97%</span>
              </div>
              <div className="flex items-center justify-between text-(--text-body)">
                <span className="flex items-center gap-1.5 text-(--text-muted)">
                  <Cpu className="w-3.5 h-3.5 text-(--text-muted)" /> Training Speedup
                </span>
                <span className="font-mono text-[11px] font-bold text-(--text-heading)">-25% Time</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Scalable ML Infrastructure & Data Pipelines (Spans 2 columns) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 relative p-8 rounded-3xl editorial-card editorial-card-hover overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-(--text-heading) group-hover:text-(--accent-primary) transition-colors flex items-center gap-2">
                  Large-Scale ML Infrastructure &amp; Data Engineering
                </h3>
              </div>

              <p className="text-(--text-body) text-sm leading-relaxed mb-6 font-sans">
                Engineered high-throughput CI/CD pipelines handling <strong>&gt;1TB</strong> data ingestion. Achieved an <strong>85% batch ingestion speedup</strong> for <strong>50M+ synthetic rows</strong>. Auto-audited 2D ground-truth labels on <strong>100k+ images</strong> and analyzed <strong>&gt;100GB clinical EHR time-series</strong> on AWS EMR and Apache Spark (+33% F-score).
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-(--pill-bg) border border-(--card-border) text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Ingestion Speedup</div>
                <div className="text-xs font-bold text-(--accent-clay) mt-1">85% Faster</div>
                <div className="text-[9px] text-(--text-muted) font-mono mt-0.5">50M+ Synthetic Rows</div>
              </div>

              <div className="p-3.5 rounded-xl bg-(--pill-bg) border border-(--card-border) text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">Label Auto-Audit</div>
                <div className="text-xs font-bold text-(--text-heading) mt-1">100k+ Images</div>
                <div className="text-[9px] text-(--text-muted) font-mono mt-0.5">Rule-Based QA</div>
              </div>

              <div className="p-3.5 rounded-xl bg-(--pill-bg) border border-(--card-border) text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">EHR Clinical ML</div>
                <div className="text-xs font-bold text-(--accent-primary) mt-1">+33% F-Score</div>
                <div className="text-[9px] text-(--text-muted) font-mono mt-0.5">Spark &amp; AWS EMR</div>
              </div>

              <div className="p-3.5 rounded-xl bg-(--pill-bg) border border-(--card-border) text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-(--text-muted)">MLOps &amp; Infra</div>
                <div className="text-xs font-bold text-(--text-heading) mt-1">Docker &amp; K8s</div>
                <div className="text-[9px] text-(--text-muted) font-mono mt-0.5">CI/CD Automation</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
