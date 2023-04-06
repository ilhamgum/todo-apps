import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* exit */}
      <motion.div
        className="fixed top-0 left-0 h-[100vh] w-full bg-[#70a9a1] dark:bg-[#40798c] origin-left z-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* enter */}
      <motion.div
        className="fixed top-0 left-0 h-[100vh] w-full bg-[#cfd7c7] dark:bg-[#70a9a1] origin-right z-40"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
}
