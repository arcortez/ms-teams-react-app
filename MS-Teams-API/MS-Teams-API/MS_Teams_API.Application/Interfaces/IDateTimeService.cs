using System;
using System.Collections.Generic;
using System.Text;

namespace MS_Teams_API.Application.Interfaces
{
    public interface IDateTimeService
    {
        DateTime NowUtc { get; }
    }
}
