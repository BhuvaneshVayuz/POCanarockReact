import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Avatar,
  Tooltip,
} from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NoticeCard = ({ data }) => {
  return (
    <Card
      elevation={0}
      className="rounded-2xl shadow-lg border border-gray-200 mb-6"
    >
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Link to={`detail`}>
            <Typography variant="h6" className="font-bold">
              {data.title}
            </Typography>
          </Link>
          <Chip label="Expiring Soon" size="small" color="error" />
        </div>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          {data.date}
        </Typography>

        <CardMedia
          component="img"
          height="160"
          image={data.image ? data.image : "/anacity.svg"}
          alt={data.title}
          className="min-h-[172px] rounded-lg my-2 p-6 bg-gray-50 !object-contain"
        />

        <Typography variant="body2" className="text-gray-700 mb-2">
          {data.description}
        </Typography>

        <div className="flex gap-2 my-3">
          {data.attachments.map((file, idx) => (
            <Tooltip key={idx} title={file}>
              <Avatar variant="rounded" className="bg-gray-200 text-gray-700">
                <InsertDriveFile />
              </Avatar>
            </Tooltip>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-3">
          <div>Email Notifications:</div>
          <div className="text-red-600">
            {data.emailNotifications ? "✓" : "✗"}
          </div>

          <div>Expiry Date:</div>
          <div className="text-red-600">{data.expiryDate}</div>

          <div>Visibility:</div>
          <div>{data.visibility}</div>

          <div>Approved By:</div>
          <div>{data.approvedBy}</div>

          <div>Posted By:</div>
          <div>{data.postedBy}</div>

          <div>Approved On:</div>
          <div>{data.approvedOn}</div>
        </div>
      </CardContent>
    </Card>
  );
};
