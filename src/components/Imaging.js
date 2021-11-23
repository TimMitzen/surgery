import React from "react";

const Imaging = () => {
  return (
    <div>
      <h2>Imaging Steps</h2>
      <ol type="1">
        <li className="list">Pc Imaging for user pc</li>

        <li className="list">Boot into Bios</li>

        <li className="list">
          check bios date, if older then a few months update the bios.
        </li>

        <li className="list">
          set hard drive to first in boot order,followed by network, and then cd
          in all the boot lists, remove the rest
        </li>

        <li className="list">
          make sure OS optimized default are set to enabled
        </li>

        <li className="list">
          go to network and turn off wireless if it is a pc
        </li>

        <li className="list">
          Go to \\surg\install newcomputer right click MakeUserAdmin
          and run powershell, follow prompts, add uphs\surgery information users
          for admin
        </li>

        <li className="list">Stop here and label pc with serial number</li>

        <li className="list">Log in as yourself</li>

        <li className="list">install logon script and from software center</li>

        <li className="list">
          Go to \\surg\install\newcomputer right click RemoteUser and
          run powershell, follow prompts, add uphs\username, username is there
          log in name
        </li>

        <li className="list">
          Go to \\surg\install\ewcomputer right click MakeUserAdmin
          and run powershell, follow prompts, add uphs\who ever the user is if
          its a laptop
        </li>

        <li className="list">log in as user</li>

        

        

        <li className="list">
          right click on backup and run with powershell and follow prompts, to
          bring old computer files over
        </li>

        <li className="list">
          c$ old computer get printers from drives in temp folder also look for
          any programs like adobe pro or dragon, if anything special ask Jason
        </li>

        <li className="list">map printers from drives.txt</li>

        <li className="list">add word, excel, powerpoint and ie to taskbar</li>

        <li className="list">configure outlook</li>

        <li className="list">put edge on desktop</li>

        <li className="list">put outlook on desktop</li>

        <li className="list">go to themes and put computer icon on desktop. Then defaults and adobe, make adobe pdf the default</li>

        <li className="list">put h and i drive on desktop</li>

        <li className="list">move favorites from old computer folder to</li>

        <li className="list">remove people from taskbar</li>

        <li className="list">put it in inventory</li>

        <li className="list">change powersettings to never for pcs</li>

        <li className="list">Log into Teams as user</li>

        <li className="list">
          Run bluejeans from \\surg\powershell\newcomputer\
        </li>

        <li className="list">after deploying pc</li>

        <li className="list">check for archives</li>

        <li className="list">check for default printers</li>

        <li className="list">move to surgery OU</li>

        <li className="list">set default printer</li>

        <li className="list">set up archives</li>

        <li className="list">
          At users desk, if it is a new pc name update Pennchart in lws editor,
          if a new pc put a ticket in
        </li>
      </ol>
    </div>
  );
};

export default Imaging;
