<script type="text/javascript" src="/static/lab_spec.js"></script>
<script type="text/javascript" src="/static/utils.js"></script>

<script >// <![CDATA[
// ****** Modify the experiment_name and lab_name variables **************
// ********MODIFY THIS SECTION **************************
 function feedback(){
  var courseid = "blockv1UniversityYPS01Anytime";
  var experiment_name = getExperimentName(lab_spec, 1)
  var lab_name = getLabName(lab_spec)
  feedback_url = "http://fp-edx-demo.vlabs.ac.in/feedback?lab_name="+lab_name+"&    exp_name="+experiment_name+"&key=defaultkey"
  window.open(feedback_url, '_blank'); 
}
// ]]></script>

<p><a onclick="feedback()" style="cursor: pointer;">Click here </a> to give feedback</p>
