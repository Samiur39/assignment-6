"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import toast from "react-hot-toast";

import { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  done: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isDone: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<number[]>([]);

  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.error("This workout is already in your plan.");
      return;
    }

    setPlan((previousPlan) => [
      ...previousPlan,
      workout,
    ]);

    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id)
    );

    toast.success("Workout removed from your plan");
  };

  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("This workout is already saved.");
      return;
    }

    setSaved((previousSaved) => [
      ...previousSaved,
      workout,
    ]);

    toast.success("Saved for later");
  };

  const removeSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((workout) => workout.id !== id)
    );

    toast.success("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setDone((previousDone) => {
      if (previousDone.includes(id)) {
        return previousDone;
      }

      return [...previousDone, id];
    });

    toast.success("Workout marked as done");
  };

  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  const isDone = (id: number) => {
    return done.includes(id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        done,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
        isInPlan,
        isSaved,
        isDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export { FitLogContext };