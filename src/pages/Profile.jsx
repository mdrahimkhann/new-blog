import $ from 'jquery';

const Profile = () => {
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  return (
    <div className='text-center bg-slate-300'>
     
     <div id="flip">Click to slide the panel down or up</div>
<div id="panel">Hello world!</div>

    </div>
  );
};

export default Profile;
