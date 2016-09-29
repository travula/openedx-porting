
function getLabName(lab_spec) {
//  alert( lab_spec['course']['display_name']);
  return lab_spec['course']['display_name'];
}

function getLabId(lab_spec) {
  return lab_spec['course']['id'];
}

function getExperimentName(lab_spec, exp_num) {
  return lab_spec['experiments'][exp_num]['name'];
}
