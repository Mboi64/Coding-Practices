const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  const phases = config.phases;
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }
  if (phases.length === 0) {
    console.log("No phases found");
    return;
  }
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < phases.length; j++) {
      if (phases[j].duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(
          `Switching to ${phases[j].color} for ${phases[j].duration} s`,
        );
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const phases = config.phases;
  const timeline = [];
  let count = 0;
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < phases.length; j++) {
      count += phases[j].duration;
      timeline.push(count);
    }
  }
  return timeline;
}
